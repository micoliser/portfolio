import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex-root" id="top">
      <section
        className="section flex-grow-1 d-flex align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="container text-center">
          <div
            className="reveal-on-load"
            style={{ maxWidth: 480, margin: "0 auto" }}
          >
            <div className="notfound-404-row">
              <span className="notfound-four">4</span>
              <span className="notfound-zero">0</span>
              <span className="notfound-four">4</span>
            </div>
            <h1
              className="hero-title text-light mb-3"
              style={{ fontSize: "2.2rem" }}
            >
              Page Not Found
            </h1>
            <p
              className="lead hero-subtitle mb-4"
              style={{ color: "var(--secondary)" }}
            >
              Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link
              to="/"
              className="btn btn-accent px-4 py-2 fw-bold"
              style={{ fontSize: "1.1rem" }}
            >
              Go Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
