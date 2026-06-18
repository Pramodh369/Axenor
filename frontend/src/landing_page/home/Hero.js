import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid bg-light"
      style={{
        paddingTop: "40px",
        paddingBottom: "60px",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 hero-content" data-aos="fade-right">
            <span
              className="badge rounded-pill px-3 py-2 mb-4"
              style={{
                backgroundColor: "#eef2ff",
                color: "#4f46e5",
                fontSize: "14px",
              }}
            >
              🚀 Smart Investing Platform
            </span>

            <h1
              className="fw-bold"
              style={{
                fontSize: "3.5rem",
                lineHeight: "1.1",
                color: "#111827",
              }}
            >
              Trade Smarter.
              <br />
              Invest Better.
            </h1>

            <p
              className="text-muted mt-4"
              style={{
                fontSize: "1.15rem",
                maxWidth: "560px",
                lineHeight: "1.8",
              }}
            >
              Axenor is a modern stock brokerage platform that enables users to
              monitor markets, manage portfolios, track investments, and gain
              valuable insights through an intuitive dashboard experience.
            </p>

            {/* Feature Cards */}

            <div className="row g-3 mt-4">
              <div className="col-6 col-md-3">
                <div className="feature-card bg-white shadow-sm rounded-4 p-3 text-center h-100">
                  <div style={{ fontSize: "24px" }}>📈</div>
                  <small className="fw-semibold">Live Market</small>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="feature-card bg-white shadow-sm rounded-4 p-3 text-center h-100">
                  <div style={{ fontSize: "24px" }}>💼</div>
                  <small className="fw-semibold">Portfolio</small>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="feature-card bg-white shadow-sm rounded-4 p-3 text-center h-100">
                  <div style={{ fontSize: "24px" }}>⭐</div>
                  <small className="fw-semibold">Watchlists</small>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="feature-card bg-white shadow-sm rounded-4 p-3 text-center h-100">
                  <div style={{ fontSize: "24px" }}>📊</div>
                  <small className="fw-semibold">Analytics</small>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}

          <div
            className="col-lg-6 text-center mt-5 mt-lg-0"
            data-aos="fade-left"
          >
            <img
              src="media/images/homeHero.png"
              alt="Dashboard"
              className="img-fluid shadow-lg rounded-4 hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
