import { useEffect } from "react";

function Home() {
  useEffect(() => {
    if (window.bootstrap && document.getElementById("quickStatsCarousel")) {
      const carouselEl = document.getElementById("quickStatsCarousel");
      if (window.bootstrap.Carousel.getInstance(carouselEl)) {
        window.bootstrap.Carousel.getInstance(carouselEl).dispose();
      }
      new window.bootstrap.Carousel(carouselEl, {
        interval: 3000,
        ride: "carousel",
        pause: false,
        wrap: true,
      });
    }
  }, []);
  return (
    <div className="flex-root" id="top">
      <header className="section flex-grow-1 d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7 reveal-on-load mb-5">
              <p className="typing-effect ms-1">Hello, my name is</p>
              <h1 className="display-4 hero-title text-light mb-3">
                Samuel Iwelumo.
              </h1>
              <h2
                style={{ color: "var(--accent)" }}
                className="hero-subtitle mb-4"
              >
                A Full‑Stack Developer building things for the web.
              </h2>
              <p className="lead hero-subtitle mb-4">
                I design, build, and scale modern web experiences for businesses
                and individuals.
              </p>
              <div className="d-flex gap-3">
                <a
                  className="btn btn-accent"
                  href="http://localhost:3001"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Portfolio
                </a>
                <a
                  className="btn btn-soft"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="col-lg-5 reveal-on-load delay-1">
              <div
                id="quickStatsCarousel"
                className="card card-dark carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
                style={{ padding: "30px 70px" }}
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <h5 className="mb-2">3+ Years Experience</h5>
                    <p className="mb-3 text-secondary">
                      I have 3+ years of experience building full-stack and
                      specialize in creating responsive and user-friendly web
                      applications that meets the needs of both user and client
                    </p>
                    <div className="icon-scroll-container">
                      <div className="icon-scroll-row">
                        <i
                          className="fas fa-briefcase"
                          title="Experience"
                          style={{ color: "#8b5cf6" }}
                        ></i>
                        <i
                          className="fas fa-users"
                          title="Teamwork"
                          style={{ color: "#38bdf8" }}
                        ></i>
                        <i
                          className="fas fa-chart-line"
                          title="Analytics"
                          style={{ color: "#22d3ee" }}
                        ></i>
                        <i
                          className="fas fa-trophy"
                          title="Achievement"
                          style={{ color: "#facc15" }}
                        ></i>
                        <i
                          className="fas fa-bolt"
                          title="Productivity"
                          style={{ color: "#f472b6" }}
                        ></i>
                        {/* duplicate icons for seamless scroll */}
                        <i
                          className="fas fa-briefcase"
                          title="Experience"
                          style={{ color: "#8b5cf6" }}
                        ></i>
                        <i
                          className="fas fa-users"
                          title="Teamwork"
                          style={{ color: "#38bdf8" }}
                        ></i>
                        <i
                          className="fas fa-chart-line"
                          title="Analytics"
                          style={{ color: "#22d3ee" }}
                        ></i>
                        <i
                          className="fas fa-trophy"
                          title="Achievement"
                          style={{ color: "#facc15" }}
                        ></i>
                        <i
                          className="fas fa-bolt"
                          title="Productivity"
                          style={{ color: "#f472b6" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <h5 className="mb-2">Frontend Specialist</h5>
                    <p className="mb-3 text-secondary">
                      I am skilled in frontend technologies such as HTML, CSS,
                      JavaScript, and React for modern and scalable UIs.
                    </p>
                    <div className="icon-scroll-container">
                      <div className="icon-scroll-row">
                        <i
                          className="fab fa-html5"
                          title="HTML5"
                          style={{ color: "#e34c26" }}
                        ></i>
                        <i
                          className="fab fa-css3-alt"
                          title="CSS3"
                          style={{ color: "#1572b6" }}
                        ></i>
                        <i
                          className="fab fa-js-square"
                          title="JavaScript"
                          style={{ color: "#f7df1e" }}
                        ></i>
                        <i
                          className="fab fa-react"
                          title="React"
                          style={{ color: "#61dafb" }}
                        ></i>
                        <i
                          className="fab fa-bootstrap"
                          title="Bootstrap"
                          style={{ color: "#7952b3" }}
                        ></i>
                        {/* duplicate icons for seamless scroll */}
                        <i
                          className="fab fa-html5"
                          title="HTML5"
                          style={{ color: "#e34c26" }}
                        ></i>
                        <i
                          className="fab fa-css3-alt"
                          title="CSS3"
                          style={{ color: "#1572b6" }}
                        ></i>
                        <i
                          className="fab fa-js-square"
                          title="JavaScript"
                          style={{ color: "#f7df1e" }}
                        ></i>
                        <i
                          className="fab fa-react"
                          title="React"
                          style={{ color: "#61dafb" }}
                        ></i>
                        <i
                          className="fab fa-bootstrap"
                          title="Bootstrap"
                          style={{ color: "#7952b3" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <h5 className="mb-2">Backend Engineering</h5>
                    <p className="mb-3 text-secondary">
                      I am experienced in Node.js (Express) or Python (Flask or
                      Django) for robust and secure APIs and services.
                    </p>
                    <div className="icon-scroll-container">
                      <div className="icon-scroll-row">
                        <i
                          className="fab fa-node-js"
                          title="Node.js"
                          style={{ color: "#339933" }}
                        ></i>
                        <i
                          className="fab fa-python"
                          title="Python"
                          style={{ color: "#3776ab" }}
                        ></i>
                        <i
                          className="fas fa-leaf"
                          title="MongoDB"
                          style={{ color: "#47A248" }}
                        ></i>
                        <i
                          className="fas fa-database"
                          title="PostgreSQL"
                          style={{ color: "#336791" }}
                        ></i>
                        <i
                          className="fas fa-code"
                          title="Express.js"
                          style={{ color: "#fff" }}
                        ></i>
                        <i
                          className="fas fa-project-diagram"
                          title="Django"
                          style={{ color: "#092e20" }}
                        ></i>
                        {/* duplicate icons for seamless scroll */}
                        <i
                          className="fab fa-node-js"
                          title="Node.js"
                          style={{ color: "#339933" }}
                        ></i>
                        <i
                          className="fab fa-python"
                          title="Python"
                          style={{ color: "#3776ab" }}
                        ></i>
                        <i
                          className="fas fa-leaf"
                          title="MongoDB"
                          style={{ color: "#47A248" }}
                        ></i>
                        <i
                          className="fas fa-database"
                          title="PostgreSQL"
                          style={{ color: "#336791" }}
                        ></i>
                        <i
                          className="fas fa-code"
                          title="Express.js"
                          style={{ color: "#fff" }}
                        ></i>
                        <i
                          className="fas fa-project-diagram"
                          title="Django"
                          style={{ color: "#092e20" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <h5 className="mb-2">Cloud & DevOps</h5>
                    <p className="mb-3 text-secondary">
                      I am skilled in DevOps practices like NginX server
                      management, Docker containerization, load balancing, etc
                      for efficient deployments.
                    </p>
                    <div className="icon-scroll-container">
                      <div className="icon-scroll-row">
                        <i
                          className="fab fa-docker"
                          title="Docker"
                          style={{ color: "#2496ed" }}
                        ></i>
                        <i
                          className="fab fa-aws"
                          title="AWS"
                          style={{ color: "#ff9900" }}
                        ></i>
                        <i
                          className="fab fa-git-alt"
                          title="Git"
                          style={{ color: "#f05032" }}
                        ></i>
                        <i
                          className="fab fa-github"
                          title="GitHub"
                          style={{ color: "#fff" }}
                        ></i>
                        <i
                          className="fas fa-server"
                          title="Nginx"
                          style={{ color: "#10b981" }}
                        ></i>
                        <i
                          className="fas fa-network-wired"
                          title="Load Balancing"
                          style={{ color: "#8b5cf6" }}
                        ></i>
                        <i
                          className="fas fa-cloud-upload-alt"
                          title="Cloud Deploy"
                          style={{ color: "#38bdf8" }}
                        ></i>
                        <i
                          className="fas fa-cogs"
                          title="Automation"
                          style={{ color: "#f59e42" }}
                        ></i>
                        {/* duplicate icons for seamless scroll */}
                        <i
                          className="fab fa-docker"
                          title="Docker"
                          style={{ color: "#2496ed" }}
                        ></i>
                        <i
                          className="fab fa-aws"
                          title="AWS"
                          style={{ color: "#ff9900" }}
                        ></i>
                        <i
                          className="fab fa-git-alt"
                          title="Git"
                          style={{ color: "#f05032" }}
                        ></i>
                        <i
                          className="fab fa-github"
                          title="GitHub"
                          style={{ color: "#fff" }}
                        ></i>
                        <i
                          className="fas fa-server"
                          title="Nginx"
                          style={{ color: "#10b981" }}
                        ></i>
                        <i
                          className="fas fa-network-wired"
                          title="Load Balancing"
                          style={{ color: "#8b5cf6" }}
                        ></i>
                        <i
                          className="fas fa-cloud-upload-alt"
                          title="Cloud Deploy"
                          style={{ color: "#38bdf8" }}
                        ></i>
                        <i
                          className="fas fa-cogs"
                          title="Automation"
                          style={{ color: "#f59e42" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#quickStatsCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#quickStatsCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Home;
