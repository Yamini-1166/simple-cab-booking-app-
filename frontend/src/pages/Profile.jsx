import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "Ucab User",
    email: "user@example.com",
  });

  return (
    <div>
      <h1>My Profile</h1>

      <input
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />

      <input
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <button onClick={() => alert("Profile updated successfully!")}>
        Update Profile
      </button>
    </div>
  );
}

export default Profile;
