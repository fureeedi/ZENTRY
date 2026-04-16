from passlib.context import CryptContext

# Configuramos el algoritmo bcrypt
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class HashManager:
    @staticmethod
    def verificar_password(password_plano, password_hasheado):
        
        return pwd_context.verify(password_plano, password_hasheado)

    @staticmethod
    def hashear_password(password):
        
        return pwd_context.hash(password)