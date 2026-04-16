import './assets/styles/index.css'
import React, { useState } from 'react';

export default function Anuncios() {
    return (
        <div className="min-h-screen bg-gray-50 bg-slate-300 pt-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Anuncios</h1>
                <p className="text-gray-700 text-lg pb-5">
                    Aquí podrás gestionar los anuncios para los residentes. Puedes crear, editar o eliminar anuncios según sea necesario.
                </p>

                <button className="p-2.5 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 text-sm md:text-base whitespace-nowrap">    
                    Crear Anuncio
                </button>

                {/* Aquí iría el contenido específico de la sección de Anuncios */}
                <div className="mt-8 p-4 bg-white rounded-lg shadow">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Lista de Anuncios</h2>
                    <p className="text-gray-600">No hay anuncios disponibles en este momento.</p>
                </div>
            </div>
        </div>
    )
}