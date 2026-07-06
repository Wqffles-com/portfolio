import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
        Home
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
        Projects
      </NavLink>
    </nav>
  );
}
