import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-dark-custom sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <span className="text-light">Samuel</span>{" "}
          <span className="i-bounce" style={{ color: "var(--accent)" }}>
            Iwelumo
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item ms-lg-2">
              <a
                className="btn btn-sm btn-accent"
                href="http://localhost:3001"
                target="_blank"
                rel="noreferrer"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
