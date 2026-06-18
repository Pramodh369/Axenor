import React from "react";

function ProjectHighlights() {
  const features = [
    {
      title: "Dashboard UI",
      desc: "Interactive investment dashboard with charts and analytics.",
      icon: "📊",
    },
    {
      title: "Portfolio Tracking",
      desc: "Monitor holdings, investments and performance metrics.",
      icon: "💼",
    },
    {
      title: "JWT Authentication",
      desc: "Secure login and user account management system.",
      icon: "🔐",
    },
    {
      title: "Responsive Design",
      desc: "Optimized for desktop, tablet and mobile devices.",
      icon: "📱",
    },
    {
      title: "MERN Architecture",
      desc: "Built using MongoDB, Express, React and Node.js.",
      icon: "⚡",
    },
    {
      title: "Reusable Components",
      desc: "Modular React components following clean architecture.",
      icon: "🧩",
    },
  ];

  return (
    <div className="container py-5">
    
      <div className="text-center mb-5">
        <h2 className="fw-bold section-title">Project Highlights</h2>

        <p className="text-muted">
          Key features and technologies implemented in the Axenor platform.
        </p>
      </div>
      <div className="row g-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="col-md-4"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div
              className="card border-0 shadow-sm h-100"
              style={{
                borderRadius: "20px",
              }}
            >
              <div className="card-body p-4">
                <div
                  style={{
                    fontSize: "2rem",
                  }}
                >
                  {item.icon}
                </div>

                <h5 className="fw-bold mt-3">{item.title}</h5>

                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectHighlights;
