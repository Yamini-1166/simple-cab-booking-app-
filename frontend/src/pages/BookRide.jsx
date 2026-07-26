import { useState } from "react";
import axios from "axios";

function BookRide() {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropLocation: "",
    vehicleType: "Mini",
    fare: 100,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookRide = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/rides/book",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Ride booked successfully!");
    } catch (error) {
      alert(error.response?.data?.message || "Booking failed");
    }
  };

  return (
    <div>
      <h1>Book Your Ride 🚕</h1>

      <form onSubmit={handleBookRide}>
        <input
          name="pickupLocation"
          placeholder="Pickup Location"
          onChange={handleChange}
          required
        />

        <input
          name="dropLocation"
          placeholder="Drop Location"
          onChange={handleChange}
          required
        />

        <select name="vehicleType" onChange={handleChange}>
          <option value="Mini">Mini</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
        </select>

        <input
          name="fare"
          type="number"
          placeholder="Fare"
          value={formData.fare}
          onChange={handleChange}
          required
        />

        <button type="submit">Book Ride</button>
      </form>
    </div>
  );
}

export default BookRide;
