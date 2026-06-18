
import React from "react";

function AboutPage() {
  return (
    <div className="container py-5">
      {/* Heading */}

      <div className="text-center mb-5" data-aos="fade-down">
        <h1 className="fw-bold">About Axenor</h1>

        <p className="text-muted fs-5">
          A modern stock brokerage platform built using the MERN stack.
        </p>
      </div>

      {/* Overview */}

      <div
        className="card border-0 shadow-sm p-5 mb-5"
        style={{ borderRadius: "20px" }}
        data-aos="fade-up"
      >
        <h3 className="fw-bold mb-4">Project Overview</h3>

        <p className="text-muted">
          Axenor is a full-stack investment management platform designed to help
          users track portfolios, monitor stock markets, analyze performance,
          and manage investments through a clean and responsive dashboard
          interface.
        </p>
      </div>

      {/* Features */}

      <div className="row g-4 mb-5">
        <div className="col-md-3" data-aos="zoom-in">
          <div className="card border-0 shadow-sm p-4 text-center h-100">
            <div style={{ fontSize: "3rem" }}>🔐</div>
            <h5 className="fw-bold mt-3">Authentication</h5>
          </div>
        </div>

        <div className="col-md-3" data-aos="zoom-in">
          <div className="card border-0 shadow-sm p-4 text-center h-100">
            <div style={{ fontSize: "3rem" }}>📈</div>
            <h5 className="fw-bold mt-3">Market Tracking</h5>
          </div>
        </div>

        <div className="col-md-3" data-aos="zoom-in">
          <div className="card border-0 shadow-sm p-4 text-center h-100">
            <div style={{ fontSize: "3rem" }}>💼</div>
            <h5 className="fw-bold mt-3">Portfolio</h5>
          </div>
        </div>

        <div className="col-md-3" data-aos="zoom-in">
          <div className="card border-0 shadow-sm p-4 text-center h-100">
            <div style={{ fontSize: "3rem" }}>📊</div>
            <h5 className="fw-bold mt-3">Analytics</h5>
          </div>
        </div>
      </div>

      {/* Why Axenor */}

      <div
        className="card border-0 shadow-sm p-5 mb-5"
        style={{ borderRadius: "20px" }}
        data-aos="fade-up"
      >
        <h3 className="fw-bold mb-4">Why Axenor?</h3>

        <ul className="text-muted fs-5">
          <li>Secure JWT Authentication</li>
          <li>Portfolio Management System</li>
          <li>Market Analysis Dashboard</li>
          <li>Responsive User Experience</li>
          <li>REST API Architecture</li>
        </ul>
      </div>

      {/* Developer */}

      <div className="text-center py-5" data-aos="fade-up">
        <h3 className="fw-bold">Developer</h3>

        <h5 className="mt-3">PRAMODH</h5>

        <p className="text-muted">MERN Stack Developer</p>
      </div>
    </div>
  );
}

export default AboutPage;
