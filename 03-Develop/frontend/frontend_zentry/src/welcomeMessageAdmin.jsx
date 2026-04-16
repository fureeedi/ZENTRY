import React from "react";
import './assets/styles/index.css'

export default function WelcomeMessageAdmin() {
    return (
        <div className='p-45'>
            <div className="p-6 md:p-10 max-w-3xl mx-auto bg-white rounded-xl shadow-2xl border border-slate-300">
                <div className='text-center'>
                    
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                        Panel de Control Zentry
                    </h2>
                    
                    <p className="text-lg text-gray-600">
                    Bienvenido al sistema de gestión inteligente. Su labor es clave para 
                        <strong> dinamizar la comunicación</strong> y asegurar una 
                        <strong> administración eficiente</strong> de las zonas comunes del conjunto.
                    </p>
                    
                    <p className="text-base font-semibold text-indigo-700 mt-4">
                        Utilice el <strong>menú</strong> lateral para gestionar el registro de residentes, 
                        supervisar la disponibilidad de áreas y publicar noticias de interés 
                        para la comunidad.
                    </p>
                </div>
            </div>
        </div>

    );
}