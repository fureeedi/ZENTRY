from fastapi import APIRouter, HTTPException, Depends, Header,Body
from modules.users import Users, UserSchema, UserSchemaUpdate
from config.config import get_connection
from auth.jwt_handler import get_current_admin_role # Importa tu validador
from passlib.hash import sha256_crypt
from auth.jwt_handler import create_access_token # Para el login

routes_user = APIRouter(prefix='/user')

# --- RUTAS PÚBLICAS (No requieren Token) ---

@routes_user.post('/signup')
async def signup(user: UserSchema):
    conn = get_connection()
    user_manager = Users(conn)
    new_id = await user_manager.create_user(user)
    return {"status": "success", "id": new_id}

@routes_user.post('/signin')
async def signin(login_data: UserSchemaUpdate):
    conn = get_connection()
    user_manager = Users(conn)
    
    # 1. Buscar por email
    user_db = await user_manager.get_user_by_email(login_data.email)
    
    # 2. Verificar existencia y password
    if not user_db or not sha256_crypt.verify(login_data.password, user_db['password']):
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")
    
    # 3. Generar Token incluyendo el ROL
    token_data = {
        "sub": user_db["email"],
        "id": user_db["_id"],
        "role": user_db.get("role", "residente")
    }
    token = create_access_token(data=token_data)
    
    return {
        "access_token": token, 
        "token_type": "bearer",
        "id":user_db.get('_id'),
        "role": user_db.get("role")
    }

# --- RUTAS PROTEGIDAS (Requieren Token de Admin) ---

@routes_user.get('/all')
async def get_users(admin_check: str = Depends(get_current_admin_role)):
    conn = get_connection()
    user_manager = Users(conn)
    
    return await user_manager.get_users()

@routes_user.put('/{id}/update')
async def update(
    id: str,
    user: UserSchemaUpdate = Body(...),  # 👈 OBLIGATORIO
    admin_check: str = Depends(get_current_admin_role)
):
    print("USER:", user)

    conn = get_connection()
    user_manager = Users(conn)
    
    result = await user_manager.update_user(id, user)
    
    if not result:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
        
    return result

@routes_user.delete('/{id}/delete')
async def delete(
    id: str, 
    admin_check: str = Depends(get_current_admin_role) # Solo admins entran aquí
):
    conn = get_connection()
    user_manager = Users(conn)
    
    result = await user_manager.delete_user(id)
    
    if not result:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
        
    return {"status": "success", "message": "Usuario eliminado correctamente"}