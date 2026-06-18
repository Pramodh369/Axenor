import React from "react";

function ProjectResults() {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold section-title">
          Platform Capabilities
        </h2>

        <p className="text-muted mt-4">
          Core functionalities available within the Axenor platform.
        </p>
      </div>

      <div className="row g-4">

        <div className="col-md-3" data-aos="fade-right">
          <div
            className="card feature-card border-0 shadow-sm text-center p-4 h-100"
            style={{
              borderRadius: "20px",
            }}
          >
            <div style={{ fontSize: "3rem" }}>📈</div>

            <h5 className="fw-bold mt-3">
              Market Monitoring
            </h5>

            <p className="text-muted">
              Track stock movements and market activity.
            </p>
          </div>
        </div>

        <div className="col-md-3" data-aos="fade-up">
          <div
            className="card feature-card border-0 shadow-sm text-center p-4 h-100"
            style={{
              borderRadius: "20px",
            }}
          >
            <div style={{ fontSize: "3rem" }}>💼</div>

            <h5 className="fw-bold mt-3">
              Portfolio Tracking
            </h5>

            <p className="text-muted">
              Manage investments and analyze holdings.
            </p>
          </div>
        </div>

        <div className="col-md-3" data-aos="fade-down">
          <div
            className="card feature-card border-0 shadow-sm text-center p-4 h-100"
            style={{
              borderRadius: "20px",
            }}
          >
            <div style={{ fontSize: "3rem" }}>⭐</div>

            <h5 className="fw-bold mt-3">
              Smart Watchlists
            </h5>

            <p className="text-muted">
              Follow selected stocks and investment opportunities.
            </p>
          </div>
        </div>

        <div className="col-md-3" data-aos="fade-left">
          <div
            className="card feature-card border-0 shadow-sm text-center p-4 h-100"
            style={{
              borderRadius: "20px",
            }}
          >
            <div style={{ fontSize: "3rem" }}>📊</div>

            <h5 className="fw-bold mt-3">
              Performance Analytics
            </h5>

            <p className="text-muted">
              Visual insights for informed investment decisions.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ProjectResults;