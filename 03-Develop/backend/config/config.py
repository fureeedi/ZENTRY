from pymongo import AsyncMongoClient

def get_connection(URI='mongodb://localhost:27017'):
    return AsyncMongoClient(URI)
