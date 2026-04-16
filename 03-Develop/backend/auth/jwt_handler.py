from jose import jwt, JWTError
from datetime import datetime, timedelta
from typing import Optional
from fastapi import HTTPException, Depends
from fastapi.security import OAuth2PasswordBearer

# Configuración básica
SECRET_KEY = "Llave_Super_SECRETA"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 120

# Esta línea permite que Swagger UI muestre el botón de "Authorize" 
# y sepa que el token se envía en la URL de 'signin'
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="user/signin")

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# --- ESTA ES LA FUNCIÓN QUE TE FALTABA ---

async def get_current_admin_role(token: str = Depends(oauth2_scheme)):
    """
    Decodifica el token, valida su integridad y verifica que el rol sea 'admin'.
    """
    credentials_exception = HTTPException(
        status_code=401,
        detail="No se pudo validar el token",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    try:
        # Decodificamos el token
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        
        # Extraemos el email y el rol del payload
        email: str = payload.get("sub")
        role: str = payload.get("role")
        
        if email is None or role is None:
            raise credentials_exception
            
        # Validación de jerarquía: solo admin puede pasar
        if role != "admin":
            raise HTTPException(
                status_code=403, 
                detail="Operación no permitida. Se requieren privilegios de Administrador."
            )
            
        return role # Retornamos el rol si todo está ok
        
    except JWTError as e:
        print("🔥 ERROR JWT:", e)
        raise credentials_exception