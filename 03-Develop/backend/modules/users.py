from typing import Optional
from pydantic import BaseModel
from pymongo import AsyncMongoClient, ReturnDocument
from bson import ObjectId
from passlib.hash import sha256_crypt

class UserSchema(BaseModel):
    nombre: str
    documento: int
    t_documento: str
    t_vinculo: str
    email: str
    password: str
    role: Optional[str] = 'residente'

class UserSchemaUpdate(BaseModel):
    nombre: Optional[str] = None
    documento: Optional[int] = None
    t_documento: Optional[str] = None
    t_vinculo: Optional[str] = None
    email: Optional[str] = None
    password: Optional[str] = None
    role: Optional[str] = None

class Users:
    def __init__(self, conn: AsyncMongoClient):
        self.db = conn.get_database('Zentry')
        self.collection = self.db.get_collection('usuarios')

    async def create_user(self, user_data: UserSchema):
        data = user_data.model_dump()
        # Hashear password antes de guardar
        data['password'] = sha256_crypt.hash(data['password'])
        result = await self.collection.insert_one(data)
        return str(result.inserted_id)

    async def get_users(self):
        cursor = self.collection.find()
        users_list = await cursor.to_list(length=100)
        for user in users_list:
            user["_id"] = str(user["_id"])
            user.pop('password', None) # Seguridad: no enviar passwords
        return users_list

    async def get_user_by_email(self, email: str):
        user = await self.collection.find_one({'email': email})
        if user:
            user['_id'] = str(user['_id'])
        return user

    async def update_user(self, id: str, user_data: UserSchemaUpdate):
        # Convertir a dict ignorando campos None
        data = user_data.model_dump(exclude_none=True)

        # Validar que haya algo para actualizar
        if not data:
            return None

        # Hashear password si viene en el update
        if 'password' in data:
            data['password'] = sha256_crypt.hash(data['password'])

        try:
            updated_user = await self.collection.find_one_and_update(
                {'_id': ObjectId(id)},
                {'$set': data},
                return_document=ReturnDocument.AFTER
            )
        except Exception:
            # ID inválido (no es ObjectId)
            return None

        if not updated_user:
            return None

        # Limpieza de respuesta
        updated_user['_id'] = str(updated_user['_id'])
        updated_user.pop('password', None)

        return updated_user
    async def delete_user(self, id: str):
        # Intentamos buscar y eliminar por ID
        deleted_user = await self.collection.find_one_and_delete(
            {'_id': ObjectId(id)}
        )
        
        if not deleted_user:
            return None # O podrías retornar {'msg': 'usuario no existente'}
            
        # Retornamos el usuario borrado (opcional, por si quieres confirmar qué se borró)
        deleted_user['_id'] = str(deleted_user['_id'])
        deleted_user.pop('password', None)
        return deleted_user
     