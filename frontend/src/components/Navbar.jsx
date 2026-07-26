import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>🚕 Ucab</h2>

      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/book-ride">Book Ride</Link>
      <Link to="/ride-history">My Rides</Link>
    </nav>
  );
}

export default Navbar;
