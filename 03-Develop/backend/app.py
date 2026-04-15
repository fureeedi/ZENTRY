from fastapi import FastAPI
from config.config import *

def create_app()->FastAPI:
    app = FastAPI()
    from routes.user import routes_user

    app.include_router(routes_user)
   
    return app


app = create_app()