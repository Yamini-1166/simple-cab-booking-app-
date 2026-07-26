import { useState } from "react";

function TrackRide() {
  const [status, setStatus] = useState("Searching");

  return (
    <div>
      <h1>Track Your Ride 🚕</h1>

      <p>Current Status: {status}</p>

      <button onClick={() => setStatus("Accepted")}>
        Simulate Driver Acceptance
      </button>

      <button onClick={() => setStatus("Ongoing")}>
        Start Ride
      </button>

      <button onClick={() => setStatus("Completed")}>
        Complete Ride
      </button>
    </div>
  );
}

export default TrackRide;
