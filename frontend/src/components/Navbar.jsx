import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";
import './Navbar.css';
import notas from '../images/notas.png'

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user)

  return (
    <nav className="nav-contenedor">
      <div className="nav-logo">
        <img src={notas} alt="notas" className="nav-imagen"/>
        <h1 className="nav-titulo"><Link to={isAuthenticated ? "/tasks" : "/"} className="nav-link">Notas Ya</Link></h1>
      </div>
      <ul className="nav-lista">
        {isAuthenticated ? (
          <>
            <li className="nav-usuario">
              Bienvenido {user.username}
            </li>
            <li>
              <ButtonLink to="/add-task">Agregar Nota</ButtonLink>
            </li>
            <li>
              <Link to={isAuthenticated ? "/tasks" : "/"} className="nav-link">Ver mis notas</Link>
            </li>
            <li>
              <Link className="link-logout" to="/" onClick={() => logout()}>Cerrar Sesion</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/login">Iniciar sesión</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Crear una cuenta</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
