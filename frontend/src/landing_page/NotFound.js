import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="container text-center d-flex flex-column justify-content-center"
      style={{
        minHeight: "80vh",
      }}
    >
      <h1
        className="fw-bold"
        style={{
          fontSize: "6rem",
          color: "#2563eb",
        }}
      >
        404
      </h1>

      <h2 className="fw-bold mb-3">
        Page Not Found
      </h2>

      <p
        className="text-muted fs-5 mb-4"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        The page you are looking for doesn't exist or may have been moved.
      </p>

      <div>
        <Link
          to="/"
          reloadDocument
          className="btn btn-primary px-4 py-2 rounded-pill"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;