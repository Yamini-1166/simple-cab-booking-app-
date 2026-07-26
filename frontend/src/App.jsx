import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookRide from "./pages/BookRide";
import RideHistory from "./pages/RideHistory";
import TrackRide from "./pages/TrackRide";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book-ride" element={<BookRide />} />
        <Route path="/ride-history" element={<RideHistory />} />
        <Route path="/track-ride" element={<TrackRide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
