import React from "react";

function TechStack() {
  const technologies = [
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Bootstrap 5", icon: "🎨" },
    { name: "JWT Auth", icon: "🔐" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Git & GitHub", icon: "🐙" },
  ];

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold section-title">Technology Stack</h2>

        <p className="text-muted mt-3">
          Technologies used to build the Axenor stock brokerage platform.
        </p>
      </div>

      <div className="row justify-content-center g-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-4 col-6"
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >
            <div
              className="card tech-card border-0 shadow-sm h-100 text-center"
              style={{
                borderRadius: "18px",
                padding: "30px 20px",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: "12px",
                }}
              >
                {tech.icon}
              </div>

              <h5 className="fw-bold text-dark mb-0">{tech.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
