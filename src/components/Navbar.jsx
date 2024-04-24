import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="logo-link">
        <img src="/assets/BIRDS.png" alt="birds" />
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to="/menu">
          Menu
        </Link>
        <Link className="nav-link" to="/menu">
          Contact
        </Link>
      </div>
    </div>
  );
}
