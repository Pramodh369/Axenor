import React from "react";

function Workflow() {
  const steps = [
    {
      number: "01",
      title: "User Authentication",
      desc: "Users register and login securely using JWT authentication.",
    },
    {
      number: "02",
      title: "Portfolio Management",
      desc: "Track holdings, investments and overall portfolio performance.",
    },
    {
      number: "03",
      title: "Market Analysis",
      desc: "Monitor stock movements and visualize insights through charts.",
    },
    {
      number: "04",
      title: "Investment Dashboard",
      desc: "Access a centralized dashboard with analytics and watchlists.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold section-title">Project Workflow</h2>

        <p className="text-muted">
          How the Axenor platform operates from authentication to analytics.
        </p>
      </div>

      <div className="row g-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="col-md-3"
            data-aos="flip-left"
            data-aos-delay={index * 100}
          >
            <div
              className="card border-0 shadow-sm h-100 text-center p-4"
              style={{
                borderRadius: "20px",
              }}
            >
              <h1
                className="fw-bold text-primary"
                style={{
                  fontSize: "3rem",
                }}
              >
                {step.number}
              </h1>

              <h5 className="fw-bold mt-3">{step.title}</h5>

              <p className="text-muted">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workflow;
