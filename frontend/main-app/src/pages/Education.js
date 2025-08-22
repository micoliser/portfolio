import { certificates, awards } from "../utils/data";

function Education() {
  return (
    <div className="flex-root" id="top">
      <section className="section flex-grow-1 d-flex align-items-center">
        <div className="container py-4">
          <p className="typing-effect ms-1">What I've learnt.</p>
          <h2 className="mb-4 fw-bold" style={{ color: "var(--accent)" }}>
            Education
          </h2>
          <div className="row g-4 reveal-on-load">
            <div className="col-md-6">
              <div className="card card-dark h-100 p-4">
                <h5 className="fw-bold mb-1">B.Sc. Computer Science</h5>
                <div
                  className="mb-2 text-accent"
                  style={{ color: "var(--accent)" }}
                >
                  The West African Union University, Benin.
                </div>
                <div
                  className="mb-2 text-secondary"
                  style={{ fontSize: "0.98em" }}
                >
                  2016 – 2020
                </div>
                <p className="mb-0">
                  Focused on core computer science concepts. Majored in software
                  engineering, data structures and algorithms, and web
                  development.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-dark h-100 p-4">
                <h5 className="fw-bold mb-1">
                  Full‑Stack Software Engineering (Backend Specialization)
                </h5>
                <div
                  className="mb-2 text-accent"
                  style={{ color: "var(--accent)" }}
                >
                  ALX Africa
                </div>
                <div
                  className="mb-2 text-secondary"
                  style={{ fontSize: "0.98em" }}
                >
                  2022 – 2023
                </div>
                <p className="mb-0">
                  Deep dived into software engineering concepts, bash scripting
                  and low level programming with C. Specialized in backend
                  engineering and devops.
                </p>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="mt-5 reveal-on-load delay-1">
            <h4
              className="fw-semibold mb-3"
              style={{ color: "var(--secondary)" }}
            >
              Certificates
            </h4>
            <div className="row g-3">
              {certificates.map((cert, idx) => (
                <div className="col-12 col-md-6 col-lg-4" key={idx}>
                  <div
                    className="card certificate-card h-100 p-3 s-badge w-100"
                    style={{
                      borderRadius: "1.1em",
                      boxShadow: "0 2px 12px 0 rgba(139,92,246,0.10)",
                      animationDelay: `${idx * 0.3}s`,
                      animationDuration: `${certificates.length * 0.3 + 2.1}s`,
                    }}
                  >
                    <div className="fw-semibold" style={{ fontSize: "1.05em" }}>
                      {cert.name}
                    </div>
                    <div
                      className="text-light"
                      style={{
                        fontSize: "0.97em",
                        opacity: 0.85,
                        marginTop: "0.2em",
                        fontWeight: 500,
                      }}
                    >
                      <span style={{ fontStyle: "italic" }}>Issued by:</span>{" "}
                      {cert.issuer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="mt-5 reveal-on-load delay-2">
            <h4
              className="fw-semibold mb-3"
              style={{ color: "var(--secondary)" }}
            >
              Awards
            </h4>
            <div className="row g-3">
              {awards.map((award, idx) => (
                <div className="col-12 col-md-6 col-lg-4" key={idx}>
                  <div
                    className="card certificate-card h-100 p-3 s-badge"
                    style={{
                      borderRadius: "1.1em",
                      boxShadow: "0 2px 12px 0 rgba(139,92,246,0.10)",
                      animationDelay: `${idx * 0.3}s`,
                      animationDuration: `${awards.length * 0.3 + 2.1}s`,
                    }}
                  >
                    <div className="fw-semibold" style={{ fontSize: "1.05em" }}>
                      {award.title}
                    </div>
                    <div
                      className="text-light"
                      style={{
                        fontSize: "0.97em",
                        opacity: 0.85,
                        marginTop: "0.2em",
                        fontWeight: 500,
                      }}
                    >
                      {award.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
