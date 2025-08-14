function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="section pt-5 pb-4 section-alt sticky-bottom">
      <div className="container">
        <div className="row gy-3 align-items-center">
          <div className="col-md">
            <div className="text-secondary">
              © {year} Samuel Iwelumo. All rights reserved.
            </div>
          </div>
          <div className="col-md-auto">
            <div className="d-flex gap-3">
              <a
                className="link-light text-decoration-none"
                href="mailto:samueliwelumo@gmail.com"
              >
                Email
              </a>
              <a
                className="link-light text-decoration-none"
                href="https://www.linkedin.com/in/samuel-iwelumo-8a43a6219/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="link-light text-decoration-none"
                href="https://github.com/micoliser"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
