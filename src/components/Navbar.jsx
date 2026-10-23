import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const linkClass = ({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link';

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">Charlie</Link>
      <nav aria-label="Main">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <a href="#contact" className="navbar__link">Contact</a>
      </nav>
    </header>
  );
}
