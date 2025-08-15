function About() {
  return (
    <div className="flex-root" id="top">
      <section className="section flex-grow-1 d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 reveal-on-load">
              <p className="typing-effect ms-1">A little about Me.</p>
              <h2
                className="hero-subtitle mb-4"
                style={{ color: "var(--accent)" }}
              >
                Your Ideal Full‑Stack Developer & Problem Solver
              </h2>
              <p className="mb-4">
                I am a full-stack developer with love for building beautiful,
                performant, and accessible web applications. My journey in tech
                which started with little interest has grown into a career
                focused on delivering value through code.
              </p>
              <p>
                I enjoy collaborating with cross-functional teams, working with
                innovative minds, and constantly learning new technologies. My
                approach combines clean code, user and business centered design,
                and a drive for continuous improvement.
              </p>
              <div className="d-flex flex-wrap gap-2 mt-4">
                <span className="s-badge">JavaScript</span>
                <span className="s-badge">React</span>
                <span className="s-badge">Node.js</span>
                <span className="s-badge">Python</span>
                <span className="s-badge">SQL</span>
                <span className="s-badge">Docker</span>
                <span className="s-badge">Git</span>
              </div>
            </div>
            <div className="col-lg-4 reveal-on-load delay-1">
              <div
                className="mb-4 floating-image"
                style={{
                  width: 200,
                  height: 200,
                }}
              >
                <img
                  src={require("../images/me.jpeg")}
                  alt="Samuel Iwelumo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "5%",
                  }}
                />
              </div>
              <div className="text-secondary">
                <p>
                  <i
                    className="fas fa-map-marker-alt me-2"
                    style={{ color: "var(--accent)" }}
                  ></i>
                  Lagos, Nigeria
                </p>
                <p>
                  <i
                    className="fas fa-graduation-cap me-2"
                    style={{ color: "var(--accent)" }}
                  ></i>
                  B.Sc. Computer Science.
                </p>
                <p>
                  <i
                    className="fas fa-envelope me-2"
                    style={{ color: "var(--accent)" }}
                  ></i>
                  samueliwelumo@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
