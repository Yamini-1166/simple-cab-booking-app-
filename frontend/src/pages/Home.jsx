import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Ucab 🚕</h1>
      <p>Book your ride quickly and comfortably.</p>

      <Link to="/book-ride">
        <button>Book a Ride</button>
      </Link>

      <Link to="/ride-history">
        <button>My Rides</button>
      </Link>
    </div>
  );
}

export default Home;
