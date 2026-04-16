import Administracion from "./administracion";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Administracion />
      <Outlet /> {/* Aquí se cargarán las páginas */}
    </>
  );
}