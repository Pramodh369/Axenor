import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white sticky-top shadow-sm"
      style={{
        paddingTop: "12px",
        paddingBottom: "12px",
      }}
    >
      <div className="container">

        <Link
          className="navbar-brand fw-bold fs-3 d-flex align-items-center"
          to="/"
          reloadDocument
        >
          <img
            src="media/images/axenor-logo.png"
            alt="Axenor"
            width="40"
            className="me-2"
          />

          <span style={{ color: "#111827" }}>
            Axenor
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item mx-2">
              <Link
                className="nav-link fw-medium"
                to="/"
                reloadDocument
              >
                Home
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                className="nav-link fw-medium"
                to="/about"
                reloadDocument
              >
                About
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                className="nav-link fw-medium"
                to="/features"
                reloadDocument
              >
                Features
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                className="nav-link fw-medium"
                to="/support"
                reloadDocument
              >
                Support
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <Link
                to="/signup"
                reloadDocument
                className="btn btn-primary px-4 rounded-pill"
              >
                Sign Up
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;