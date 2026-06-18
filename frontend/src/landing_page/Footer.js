import React from "react";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5">

      <div className="container py-5">

        <div className="row">

          {/* Project Info */}
          <div className="col-md-4 mb-4">

            <h3 className="fw-bold">
              Axenor
            </h3>

            <p className="text-muted mt-3">
              A full-stack stock brokerage platform built using the MERN stack.
              This project demonstrates authentication, portfolio management,
              dashboard analytics, and responsive UI development.
            </p>

          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">

            <h5 className="fw-bold mb-3">
              Quick Links
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                Home
              </li>

              <li className="mb-2">
                About
              </li>

              <li className="mb-2">
                Features
              </li>

              <li className="mb-2">
                Sign Up
              </li>

            </ul>

          </div>

          {/* Technologies */}
          <div className="col-md-4 mb-4">

            <h5 className="fw-bold mb-3">
              Technologies Used
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2">React.js</li>
              <li className="mb-2">Node.js</li>
              <li className="mb-2">Express.js</li>
              <li className="mb-2">MongoDB</li>
              <li className="mb-2">Bootstrap</li>
              <li className="mb-2">JWT Authentication</li>

            </ul>

          </div>

        </div>

        <hr />

        <div className="text-center text-muted">

          <p className="mb-1">
            © 2026 Axenor — MERN Stack Project
          </p>

          <p className="mb-0">
            Developed by PRAMODH
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;