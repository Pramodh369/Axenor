import React from "react";

function FeaturesPage() {
  return (
    <div className="container py-5">

      {/* Heading */}

      <div className="text-center mb-5" data-aos="fade-down">
        <h1 className="fw-bold display-4">Platform Features</h1>

        <p className="text-muted fs-5">
          Everything you need to manage investments smarter.
        </p>
      </div>

      {/* Features Grid */}

      <div className="row g-4">

        <div className="col-md-4" data-aos="zoom-in">
          <div className="card border-0 shadow-sm p-4 text-center h-100">
            <div style={{ fontSize: "3rem" }}>📈</div>
            <h4 className="fw-bold mt-3">Live Market Data</h4>
            <p className="text-muted">
              Track stock prices and market trends in real time.
            </p>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in">
          <div className="card border-0 shadow-sm p-4 text-center h-100">
            <div style={{ fontSize: "3rem" }}>💼</div>
            <h4 className="fw-bold mt-3">Portfolio Management</h4>
            <p className="text-muted">
              Organize and monitor all your investments easily.
            </p>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in">
          <div className="card border-0 shadow-sm p-4 text-center h-100">
            <div style={{ fontSize: "3rem" }}>📊</div>
            <h4 className="fw-bold mt-3">Analytics Dashboard</h4>
            <p className="text-muted">
              Visualize performance through charts and reports.
            </p>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in">
          <div className="card border-0 shadow-sm p-4 text-center h-100">
            <div style={{ fontSize: "3rem" }}>⭐</div>
            <h4 className="fw-bold mt-3">Watchlists</h4>
            <p className="text-muted">
              Save favorite stocks and monitor them quickly.
            </p>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in">
          <div className="card border-0 shadow-sm p-4 text-center h-100">
            <div style={{ fontSize: "3rem" }}>🔔</div>
            <h4 className="fw-bold mt-3">Smart Alerts</h4>
            <p className="text-muted">
              Receive notifications on important market events.
            </p>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in">
          <div className="card border-0 shadow-sm p-4 text-center h-100">
            <div style={{ fontSize: "3rem" }}>🔒</div>
            <h4 className="fw-bold mt-3">Secure Authentication</h4>
            <p className="text-muted">
              JWT-based authentication keeps your account secure.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default FeaturesPage;