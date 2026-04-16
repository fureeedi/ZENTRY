from fastapi import APIRouter
from modules.users import Users,UserSchema,UserSchemaUpdate
from config.config import get_connection
routes_user = APIRouter(prefix='/user')

@routes_user.get('/users')
async def get_users() ->list:
    conn = get_connection()
    user_manager = Users(conn)
    results = await user_manager.get_users()
    return results


@routes_user.post('/signup')
async def create_users(user:UserSchema)->str:
    conn = get_connection()
    user_manager=Users(conn)
    id = await user_manager.create_user(user)
    return id

@routes_user.post('/signin') # 1. Cambia a POST para enviar el JSON en el body
async def signin(user: UserSchemaUpdate)->dict: # 2. Usa UserSchemaUpdate para que email y password sean suficientes
    conn = get_connection()
    user_manager = Users(conn)
    results = await user_manager.get_user(user)
    
    if not results:
        
        return {"status": "error", "message": "Credenciales inválidas"}
        
    return results
    

