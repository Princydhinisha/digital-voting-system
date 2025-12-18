import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "../styles/Global.css";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      {/* LEFT SIDE - LOGO */}
      <h2
        className="logo"
        onClick={() => navigate("/dashboard")}
      >
        🗳️ Digital Voting System
      </h2>

      {/* RIGHT SIDE - PROFILE */}
      <div className="profile-menu">
        <div
          className="profile-circle"
          onClick={() => setOpen(!open)}
        >
          <FaUserCircle size={22} />
        </div>

        {open && (
          <div className="dropdown">
            <p
              onClick={() => {
                setOpen(false);
                navigate("/dashboard");
              }}
            >
              🏠 Home
            </p>

            <p
              onClick={() => {
                setOpen(false);
                navigate("/profile");
              }}
            >
              👤 Profile
            </p>

            <p
              onClick={() => {
                setOpen(false);
                navigate("/");
              }}
            >
              🚪 Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
