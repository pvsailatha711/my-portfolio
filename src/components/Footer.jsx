function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span>Vijaya Sai Latha Pulipati</span>
        </div>

        <p className="footer-copy">
          © {year} · Designed &amp; built with <span>♥</span> in React
        </p>

        <div className="footer-social">
          <a
            href="https://github.com/pvsailatha711"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            id="footer-github"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/vijaya-sai-latha/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            id="footer-linkedin"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="mailto:vijayasailatha@gmail.com"
            title="Email"
            id="footer-email"
          >
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
