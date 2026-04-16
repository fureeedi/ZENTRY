import { useState } from 'react';
import './assets/styles/index.css';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div className="min-h-screen bg-slate-300 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-slate-300">
        
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-indigo-900 tracking-tight">ZENTRY</h1>
          <p className="text-slate-500 mt-2 text-sm">Gestión de Propiedad Horizontal</p>
        </div>

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="space-y-5">

            { /* CAMPO USUARIO */}
            <div>
                <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 outline-none transition-all"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* CAMPO CONTRASEÑA */}  
            <div>
                <input
                id='contrasena'
                type="password"
                required
                className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 outline-none transition-all"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

          {/* ROLES */}
          <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start">

                <label className="flex items-center justify-center gap-2 text-sm font-bold text-slate-600">
                <input
                    type="radio"
                    name="rol"
                    value="Residente"
                    checked={rol === "Residente"}
                    onChange={(e) => setRol(e.target.value)}
                    className="accent-blue-950"
                />
                Residente
                </label>

                <label className="flex items-center justify-center gap-2 text-sm font-bold text-slate-600">
                <input
                    type="radio"
                    name="rol"
                    value="Propietario"
                    checked={rol === "Propietario"}
                    onChange={(e) => setRol(e.target.value)}
                    className="accent-blue-950"
                />
                Propietario
                </label>

                <label className="flex items-center justify-center gap-2 text-sm font-bold text-slate-600">
                <input
                    type="radio"
                    name="rol"
                    value="Vigilancia"
                    checked={rol === "Vigilancia"}
                    onChange={(e) => setRol(e.target.value)}
                    className="accent-blue-950"
                />
                Vigilancia
                </label>

                <label className="flex items-center justify-center gap-2 text-sm font-bold text-slate-600">
                <input
                    type="radio"
                    name="rol"
                    value="Administración"
                    checked={rol === "Administración"}
                    onChange={(e) => setRol(e.target.value)}
                    className="accent-blue-950"
                />
                Administración
                </label>
            </div>

          {/* BOTON */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2.5 rounded-lg transition-colors shadow-md"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}