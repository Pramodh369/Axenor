import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      toast.success("Login Successful ✅");

      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid Credentials ❌");
      console.log(error);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "85vh" }}
    >
      <div
        className="bg-white shadow-sm p-5"
        style={{
          maxWidth: "580px",
          width: "100%",
          borderRadius: "24px",
        }}
      >
        <div className="text-center mb-5">
          <h1 className="fw-bold">Welcome Back</h1>

          <p className="text-muted">Sign in to access your Axenor account.</p>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Email Address</label>

          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Password</label>

          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary btn-lg w-100" onClick={handleLogin}>
          Sign In
        </button>

        <div className="text-center mt-4">
          <span className="text-muted">Don't have an account?</span>

          <Link to="/signup" className="ms-2 fw-semibold text-decoration-none">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
