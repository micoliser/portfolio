import { mainProjects, otherProjects } from "../utils/data";

function Projects() {
  return (
    <div className="flex-root" id="top">
      <section
        className="section flex-grow-1 d-flex align-items-center"
        style={{ background: "var(--bg)", minHeight: "100vh" }}
      >
        <div className="container py-4">
          <h2 className="mb-4 fw-bold" style={{ color: "var(--accent)" }}>
            Projects
          </h2>
          <div className="mb-4 p-4" style={{ color: "#bfc9d1" }}>
            I enjoy building impactful web applications and tools that solve
            real-world problems. Below are some of my favorite projects, each
            crafted with attention to detail, modern technologies, and a focus
            on user experience.
          </div>
          <div className="d-flex flex-column gap-5">
            {mainProjects.map((proj, idx) => {
              const isOdd = idx % 2 !== 0;
              return (
                <div
                  key={idx}
                  className="project-card row align-items-center g-0 mb-4"
                  style={{
                    background: "#172133",
                    borderRadius: 18,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    className={`col-12 col-md-6 d-flex flex-column justify-content-center p-4 order-1 ${
                      isOdd ? "order-md-2" : "order-md-1"
                    }`}
                    style={{ minHeight: 220 }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "#101a28",
                      }}
                    >
                      <div
                        id={`carousel-${proj.title
                          .replace(/\\s+/g, "")
                          .toLowerCase()}`}
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-bs-interval="3000"
                        style={{ height: "100%" }}
                      >
                        <div className="carousel-inner">
                          {proj.images.map((img, i) => (
                            <div
                              className={`carousel-item${
                                i === 0 ? " active" : ""
                              }`}
                              key={i}
                            >
                              <img
                                src={img}
                                className="d-block w-100"
                                alt={proj.title + " screenshot"}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  maxHeight: 420,
                                  objectFit: "contain",
                                  filter: "brightness(0.92)",
                                  borderRight: "1px solid #232e47",
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`col-12 col-md-6 d-flex flex-column justify-content-center p-4 order-2 ${
                      isOdd ? "order-md-1" : "order-md-2"
                    }`}
                    style={{ minHeight: 220 }}
                  >
                    <div
                      style={{
                        color: "var(--accent)",
                        fontSize: 14,
                        fontWeight: 600,
                        letterSpacing: 1,
                        marginBottom: 6,
                      }}
                    >
                      Featured Project
                    </div>
                    <h3 className="fw-bold mb-2" style={{ color: "#fff" }}>
                      {proj.title}
                    </h3>
                    <p
                      className="mb-3"
                      style={{
                        color: "#bfc9d1",
                        lineHeight: 1.6,
                      }}
                    >
                      {proj.description}
                    </p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {proj.tech.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            background: "rgba(36, 54, 87, 0.7)",
                            color: "var(--accent)",
                            fontSize: 13,
                            borderRadius: 6,
                            padding: "3px 10px",
                            fontWeight: 500,
                            marginRight: 6,
                            marginBottom: 4,
                            letterSpacing: 0.2,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex flex-wrap gap-3 align-items-center mt-auto">
                      {proj.live && (
                        <a
                          className="project-link"
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>Live App</span>{" "}
                          <span className="arrow" style={{ fontSize: 18 }}>
                            &#8599;
                          </span>
                        </a>
                      )}
                      {proj.github && (
                        <a
                          className="project-link"
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#bfc9d1",
                          }}
                        >
                          <span>GitHub</span>{" "}
                          <span className="arrow" style={{ fontSize: 18 }}>
                            &#8599;
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <h3
              className="mb-4 fw-bold text-center"
              style={{ marginTop: "100px", color: "#fff" }}
            >
              Other Projects
            </h3>
            <div className="row g-3" style={{ marginTop: "50px" }}>
              {otherProjects.map((proj, i) => (
                <div
                  className="col-12 col-md-6 col-lg-4"
                  key={i}
                  style={{ height: 350 }}
                >
                  <div
                    className="project-card card card-dark h-100 p-4"
                    style={{ position: "relative" }}
                  >
                    <div className="d-flex justify-content-between mb-3">
                      <span className="fs-2">
                        <i
                          className="fa-regular fa-folder"
                          title="folder"
                          style={{
                            color: "var(--accent)",
                          }}
                        ></i>
                      </span>
                      <div
                        className="d-flex justify-content-between"
                        style={{ fontSize: 12 }}
                      >
                        {proj.live && (
                          <a
                            className="project-link me-2"
                            href={proj.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>Live</span>{" "}
                            <span className="arrow">&#8599;</span>
                          </a>
                        )}
                        {proj.github && (
                          <a
                            className="project-link"
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "#bfc9d1",
                            }}
                          >
                            <span>GitHub</span>{" "}
                            <span className="arrow">&#8599;</span>
                          </a>
                        )}
                      </div>
                    </div>
                    <h5 className="fw-bold mt-4" style={{ color: "#fff" }}>
                      {proj.title}
                    </h5>
                    <p>{proj.description}</p>
                    <div
                      className="d-flex flex-wrap gap-1 mb-3 mt-2"
                      style={{ position: "absolute", bottom: 10, left: 10 }}
                    >
                      {proj.tech.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            color: "var(--accent)",
                            fontSize: 13,
                            borderRadius: 6,
                            fontWeight: 500,
                            marginRight: 6,
                            marginBottom: 4,
                            letterSpacing: 0.2,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
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

export default Projects;
