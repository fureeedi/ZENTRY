import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './login';
import Administracion from './administracion';

createRoot(document.getElementById('root')).render(

<BrowserRouter>

    <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Login />} />

        {/* Rutas administración */}
        <Route path='administracion' element={<Administracion />}>
        </Route>

    </Routes>

</BrowserRouter>
);