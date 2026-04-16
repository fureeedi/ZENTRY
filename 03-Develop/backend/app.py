from fastapi import FastAPI
from config.config import *
from fastapi.middleware.cors import CORSMiddleware
def create_app()->FastAPI:
    app = FastAPI()
    from routes.user import routes_user
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],  # en producción se restringe
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    app.include_router(routes_user)
   
    return app


app = create_app()