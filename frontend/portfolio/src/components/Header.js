import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/projects">
          <span className="text-light">Samuel</span>{" "}
          <span className="i-bounce" style={{ color: "var(--accent)" }}>
            Iwelumo
          </span>
        </Link>
        <Link
          className="btn btn-outline-light ms-auto"
          to="https://samueliwelumo.tech"
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
        >
          Back to Main
        </Link>
      </div>
    </nav>
  );
}
export default Header;
