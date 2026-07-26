import { useEffect, useState } from "react";
import axios from "axios";

function RideHistory() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/rides/my-rides",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setRides(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRides();
  }, []);

  return (
    <div>
      <h1>My Ride History</h1>

      {rides.length === 0 ? (
        <p>No rides found.</p>
      ) : (
        rides.map((ride) => (
          <div key={ride._id}>
            <p>From: {ride.pickupLocation}</p>
            <p>To: {ride.dropLocation}</p>
            <p>Vehicle: {ride.vehicleType}</p>
            <p>Fare: ₹{ride.fare}</p>
            <p>Status: {ride.status}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default RideHistory;
