import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './login';
import Administracion from './administracion';
import WelcomeMessageAdmin from './welcomeMessageAdmin';
import Anuncios from './anuncios';

createRoot(document.getElementById('root')).render(

<BrowserRouter>

    <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Login />} />

        {/* Rutas administración */}
        <Route path='/admin' element={<Administracion />}>
            <Route index element={<WelcomeMessageAdmin />} />
            <Route path='anuncios' element={<Anuncios />} />
        </Route>

    </Routes>

</BrowserRouter>
);