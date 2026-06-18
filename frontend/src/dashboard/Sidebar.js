import React from "react";
import { toast } from "react-toastify";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  
const handleLogout = () => {
  localStorage.removeItem("token");

  toast.success(
    "Logged Out Successfully 👋"
  );

  navigate("/login");
};
  
  const menuItem = (path, icon, text) => (
    <Link
      to={path}
      className={`text-decoration-none d-block mb-3 px-3 py-2 rounded ${
        location.pathname === path
          ? "bg-primary text-white"
          : "text-white"
      }`}
    >
      <span className="me-2">
        {icon}
      </span>
      {text}
    </Link>
  );

  return (
    <div
      className="d-none d-md-block bg-dark text-white p-4"
      style={{
        width: "280px",
        minHeight: "100vh",
        flexShrink: 0,
        position: "sticky",
        top: 0,
      }}
    >
      <h2 className="fw-bold mb-5">
        Axenor
      </h2>

      {menuItem(
        "/dashboard",
        "📊",
        "Dashboard"
      )}

      {menuItem(
        "/watchlist",
        "📈",
        "Watchlist"
      )}

      {menuItem(
        "/holdings",
        "💼",
        "Holdings"
      )}

      {menuItem(
        "/orders",
        "📑",
        "Orders"
      )}

      {menuItem(
        "/funds",
        "💰",
        "Funds"
      )}

      {menuItem(
        "/settings",
        "⚙️",
        "Settings"
      )}

      <button
        className="btn btn-danger w-100 mt-4"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;