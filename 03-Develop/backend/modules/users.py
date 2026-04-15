from typing import Optional, List
from pydantic import BaseModel
from pymongo import AsyncMongoClient
from bson import ObjectId
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
    t_documento: Optional[str] = None  # Corregido Optional con O mayúscula
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
        
        result = await self.collection.insert_one(data)
        return str(result.inserted_id)

    async def get_users(self):
        
        cursor = self.collection.find()
        users_list = await cursor.to_list(length=100)
        
        for user in users_list:
            user["_id"] = str(user["_id"])

        return users_list
    async def get_user(self, user_data: UserSchemaUpdate): # Usa el Update que permite campos opcionales
        data = user_data.model_dump(exclude_none=True)
        if not data:
            return None
        
        user = await self.collection.find_one(data) # Corregido de colection a collection
        if user:
            user['_id'] = str(user['_id'])
        return user