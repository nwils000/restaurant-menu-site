import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="logo-link">
        Earth Food
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to="/menu">
          Menu
        </Link>
        <Link className="nav-link" to="/reservations">
          Reservations
        </Link>
        <Link className="nav-link" to="/checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
}
