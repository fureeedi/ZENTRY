import './assets/styles/index.css';
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://127.0.0.1:8000/user/signin',
        {
          email: email,
          password: password
        }
      );

      // 🔥 Guardar token correctamente
      const token = res.data.access_token;
      localStorage.setItem("token", token);

      console.log("Login exitoso:", res.data);

      // 🔥 Usar el rol que viene del backend
      const role = res.data.role;
      navigate(`/${role}`);

    } catch (error) {
      console.error("Error login:", error);
      alert("Credenciales incorrectas o error en el servidor");
    }
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

          {/* EMAIL */}
          <div>
            <input
              type="email"
              required
              className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 outline-none"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <div>
            <input
              type="password"
              required
              className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 outline-none"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* BOTÓN */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2.5 rounded-lg transition"
          > 
            Iniciar sesión
          </button>
        </form>

        {/* RECUPERAR CONTRASEÑA */}
        <div className="mt-4 text-center">
          <Link
            to="/save-password"
            className="text-sm text-gray-500 hover:text-blue-900"
          >
            ¿Olvidó contraseña?
          </Link>
        </div>
      </div>
    </div>
  );
}