import { useState } from "react";

function BookRide() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [rideType, setRideType] = useState("car");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pickupLocation || !dropLocation) {
      setMessage("Please enter pickup and drop locations");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5000/api/rides/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          pickupLocation,
          dropLocation,
          rideType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Failed to book ride");
        return;
      }

      setMessage("Ride booked successfully!");

      setPickupLocation("");
      setDropLocation("");
      setRideType("car");
    } catch (error) {
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div className="page-container">
      <h1>Book a Ride</h1>

      <form onSubmit={handleSubmit} className="ride-form">
        <input
          type="text"
          placeholder="Enter pickup location"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter drop location"
          value={dropLocation}
          onChange={(e) => setDropLocation(e.target.value)}
        />

        <select
          value={rideType}
          onChange={(e) => setRideType(e.target.value)}
        >
          <option value="car">Car</option>
          <option value="bike">Bike</option>
          <option value="auto">Auto</option>
        </select>

        <button type="submit">Book Ride</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default BookRide;
