import './assets/styles/index.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const ICON_URLS = {
    // Menú Lateral (URLs de Placeholders en lugar de SVG)
    anuncios: 'https://cdn-icons-png.flaticon.com/512/2415/2415903.png',     

    // Icono para cerrar el menú (X) - Se mantiene como SVG para la UI

};

const MenuItem = ({ iconUrl, title, to, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center w-full bg-white rounded-lg shadow-md overflow-hidden mb-4
               border border-gray-200 transition duration-150 hover:bg-gray-50"
  >
    {/* Área del icono (imitando el bloque gris del wireframe) */}
    <div className="flex items-center justify-center p-4 w-1/4 bg-gray-200 h-full">
      <img
        src={iconUrl}
        alt={`Icono de ${title}`}
        className="w-12 h-12 md:w-12 md:h-12 rounded-md"
      />
    </div>
    
    {/* Área del texto */}
    <div className="w-3/4 p-4 text-left font-semibold text-gray-800 uppercase text-sm leading-tight">
      {title}
    </div>
  </Link>
);

export default function Administracion() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. Usamos las URLs definidas en ICON_URLS para el array de items
  const menuItems = [

    { iconUrl: ICON_URLS.anuncios, title: 'Anuncios', Link ,to: '/admin/registros-funcionarios' },
 
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    // Cierra el menú cuando se hace clic en un enlace (simula navegación)
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. Barra de Navegación Superior (Fixed Header) */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-20 border-b border-gray-200 p-3 md:p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Botón MENÚ */}
          <button
            onClick={toggleMenu}
            className="p-2.5 border-2 border-gray-300 rounded-lg font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition duration-150 uppercase"
          >
            MENÚ
          </button>

          {/* Título Central */}
          <h1 className="text-base md:text-xl font-extrabold text-gray-900 tracking-wider text-center uppercase truncate mx-4">
            ZENTRY
          </h1>

          {/* Botón Cerrar Sesión (simulado) */}

          <Link
            to="/"
            className="p-2.5 border-2 border-slate-500 rounded-lg font-semibold text-white bg-slate-600 hover:bg-slate-700 transition duration-150 text-sm md:text-base whitespace-nowrap"> 
          
            Cerrar Sesión
          </Link>
        </div>
      </header>

      {/* 2. Menú Lateral (Sidebar) */}
      
      {/* Overlay para cerrar el menú al hacer clic fuera */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Contenedor del Menú Deslizable */}
      <nav
        className={`fixed top-0 left-0 h-full w-full max-w-xs bg-gray-100 p-6 z-30 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:max-w-sm`}
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 uppercase">MENÚ</h2>

        </div>

        {/* Opciones del Menú */}
        <div className="space-y-4">
          {menuItems.map(item => (
            <MenuItem 
              key={item.id}
              // Se pasa la URL, no el componente
              iconUrl={item.iconUrl}
              title={item.title}
              to={item.to}
              onClick={handleLinkClick}
            />
          ))}
        </div>
      </nav>
      <main>

    {/* Contenedor para el contenido principal del mensaje principal*/}
    <div className='p-45'>
            <div className="p-6 md:p-10 max-w-3xl mx-auto bg-white rounded-xl shadow-2xl border-2 border-indigo-600/50">
                <div className='text-center'>
                    
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                        👋 Panel de Control Zentry
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
      </main>      
    </div>
  )
}