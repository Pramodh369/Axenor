import React from "react";
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

    navigate("/login");
  };

  const menuItem = (path, icon, text) => (
    <Link
      to={path}
      className={`text-decoration-none d-block mb-3 p-2 rounded ${
        location.pathname === path
          ? "bg-primary text-white"
          : "text-white"
      }`}
    >
      {icon} {text}
    </Link>
  );

  return (
    <div
      className="bg-dark text-white p-4"
      style={{
        width: "250px",
        minHeight: "100vh",
      }}
    >
      <h2 className="fw-bold mb-5">
        Axenor
      </h2>

      {menuItem("/dashboard", "📊", "Dashboard")}
      {menuItem("/watchlist", "📈", "Watchlist")}
      {menuItem("/holdings", "💼", "Holdings")}
      {menuItem("/orders", "📑", "Orders")}
      {menuItem("/funds", "💰", "Funds")}
      {menuItem("/settings", "⚙", "Settings")}

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