import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div
      className="container-fluid bg-light"
      style={{ minHeight: "90vh" }}
    >
      <div className="container py-5">

        <div className="row justify-content-center align-items-center">

          <div className="col-lg-5">

            <div
              className="card border-0 shadow-lg p-5"
              style={{ borderRadius: "24px" }}
            >

              <div className="text-center mb-4">
                <h2 className="fw-bold">
                  Create Account
                </h2>

                <p className="text-muted">
                  Join Axenor and start your investment journey.
                </p>
              </div>

              <form>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control py-3"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control py-3"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control py-3"
                    placeholder="Create password"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    className="form-control py-3"
                    placeholder="Confirm password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-3 fw-semibold"
                  style={{
                    borderRadius: "12px",
                  }}
                >
                  Create Account
                </button>

              </form>

              <div className="text-center mt-4">
                <span className="text-muted">
                  Already have an account?
                </span>

                <Link
                  to="/login"
                  className="text-decoration-none ms-2 fw-semibold"
                >
                  Login
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Signup;