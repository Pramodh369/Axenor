import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Sidebar from "./Sidebar";


function SettingsPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    if (token) {
      const decoded =
        jwtDecode(token);

      setUser({
        name: decoded.name,
        email: decoded.email,
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="d-flex">
      <Sidebar />

      


      <div className="flex-grow-1 p-5">
        <h2 className="fw-bold mb-4">
          Settings
        </h2>

        <div className="card border-0 shadow-sm p-4">

          <h5 className="mb-3">
            Account Information
          </h5>

          <p>
            <strong>Name:</strong>{" "}
            {user.name}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {user.email}
          </p>

          <button
            className="btn btn-danger mt-3"
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