import { Link } from "react-router-dom";
import nota from '../images/nota.png'
import './HomePage.css';

function HomePage() {
  return (
  <section className="home-seccion">
    <header className="home-header">
      <h1 className="home-titulo">Notas Ya</h1>
      <p className="home-parrafo">Tu lugar para tomar notas rápidas y organizar tus ideas de manera eficiente. ¡Escribe, guarda y accede a tus notas fácilmente en cualquier momento!</p>
      <div className="home-links">
        <Link to="/register" className="home-registrar">Regístrate gratis</Link>
        <Link to="/login" className="home-iniciar">¿Ya tienes una cuenta? Inicia sesión.</Link>
      </div>
      <figure className="home-figure">
        <img src={nota} alt="" className="home-imagen"/>
      </figure>
    </header>
  </section>
  );
}

export default HomePage;
