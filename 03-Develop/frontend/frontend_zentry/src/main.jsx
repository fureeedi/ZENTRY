import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './login';

createRoot(document.getElementById('root')).render(

<BrowserRouter>
    <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Login />} />
    </Routes>

</BrowserRouter>
);