import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    // Name Validation
    if (name.length < 3 || name.length > 30) {
      toast.error(
        "Name must be between 3 and 30 characters"
      );
      return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
      toast.error(
        "Name can contain only letters and spaces"
      );
      return;
    }

    // Password Validation
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/.test(
        password
      )
    ) {
      toast.error(
        "Password must contain uppercase, lowercase and number"
      );
      return;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
      toast.error(
        "Passwords do not match ❌"
      );
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name,
          email,
          password,
        }
      );

      toast.success(
        "Account Created Successfully ✅"
      );

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Signup Failed ❌"
      );

      console.log(error);
    }
  };

  return (
    <div
      className="container-fluid bg-light"
      style={{
        minHeight: "90vh",
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5">
            <div
              className="card border-0 shadow-lg p-5"
              style={{
                borderRadius: "24px",
              }}
            >
              <div className="text-center mb-4">
                <h2 className="fw-bold">
                  Create Account
                </h2>

                <p className="text-muted">
                  Join Axenor and start
                  your investment journey.
                </p>
              </div>

              <form onSubmit={handleSignup}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control py-3"
                    placeholder="Enter your full name"
                    value={name}
                    maxLength="30"
                    onChange={(e) =>
                      setName(
                        e.target.value
                      )
                    }
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
                    value={email}
                    onChange={(e) =>
                      setEmail(
                        e.target.value
                      )
                    }
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
                    value={password}
                    onChange={(e) =>
                      setPassword(
                        e.target.value
                      )
                    }
                  />

                  <small className="text-muted">
                    Must contain 8-20 characters,
                    uppercase, lowercase and
                    number.
                  </small>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    className="form-control py-3"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(
                        e.target.value
                      )
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-3 fw-semibold"
                  style={{
                    borderRadius:
                      "12px",
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