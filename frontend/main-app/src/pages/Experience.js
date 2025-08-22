import { experiences } from "../utils/data";

function Experience() {
  return (
    <div className="flex-root" id="top">
      <section className="section flex-grow-1 d-flex align-items-center">
        <div className="container py-4">
          <p className="typing-effect ms-1">Where I've Worked.</p>
          <h2 className="mb-4 fw-bold" style={{ color: "var(--accent)" }}>
            Experience
          </h2>
          <div className="row g-4 reveal-on-load">
            {experiences.map((exp, idx) => (
              <div className="col-12 col-md-6 col-lg-4" key={idx}>
                <div
                  className="card card-dark h-100 p-4 position-relative exp-fade-in breathe"
                  style={{
                    overflow: "hidden",
                    animationDelay: `${idx * 0.5}s, 0s`,
                  }}
                >
                  <div className="ms-4">
                    <div className="d-flex flex-wrap align-items-center mb-1">
                      <h5
                        className="fw-bold mb-0 me-2"
                        style={{ color: "var(--accent)" }}
                      >
                        {exp.role}
                      </h5>
                      <span
                        className="badge bg-secondary ms-1"
                        style={{
                          background: "var(--secondary)",
                          color: "#2e2c2cff",
                          fontWeight: 600,
                        }}
                      >
                        {exp.company}
                      </span>
                    </div>
                    <div
                      className="mb-2 text-secondary"
                      style={{ fontSize: "0.98em" }}
                    >
                      {exp.period} &nbsp;|&nbsp; {exp.location}
                    </div>
                    <p className="mb-2" style={{ color: "#e5e7eb" }}>
                      {exp.description}
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="badge s-badge certificate-card"
                          style={{
                            boxShadow: "0 2px 12px 0 rgba(139,92,246,0.10)",
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${
                              exp.skills.length * 0.3 + 2.1
                            }s`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
