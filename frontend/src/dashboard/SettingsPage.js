import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

function SettingsPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 p-5">
        <h2 className="fw-bold mb-4">Settings</h2>

        <div className="card border-0 shadow-sm p-4">
          <p>Name: User</p>
          <p>Email: user@gmail.com</p>

          <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;