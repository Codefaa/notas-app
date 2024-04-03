import './ButtonLink.css'
import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} className='boton-link'>
    {children}
  </Link>
);
