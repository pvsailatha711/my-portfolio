import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#home" className="navbar-logo-avatar" onClick={() => handleNavClick('#home')} id="navbar-logo">
            <img src="/profile.png" alt="Latha Pulipati" className="navbar-avatar-img" />
          </a>

          <div className="navbar-links">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`navbar-link ${activeSection === link.href.replace('#','') ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="navbar-social">
            <a
              href="https://github.com/pvsailatha711"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-social-link"
              aria-label="GitHub"
              id="navbar-github"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://linkedin.com/in/vijaya-sai-latha"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-social-link"
              aria-label="LinkedIn"
              id="navbar-linkedin"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="/resume.pdf"
              download="Latha_Pulipati_Resume.pdf"
              className="navbar-social-link navbar-resume-btn"
              aria-label="Resume"
              id="navbar-resume"
            >
              Resume
            </a>
          </div>

          <button
            className="navbar-hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle navigation"
            id="nav-hamburger"
          >
            <span style={mobileOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
            <span style={mobileOpen ? { opacity: 0 } : {}} />
            <span style={mobileOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={`navbar-link ${activeSection === link.href.replace('#','') ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
          >
            {link.label}
          </a>
        ))}
        <div className="navbar-social" style={{ marginTop: '8px', justifyContent: 'center' }}>
          <a href="https://github.com/pvsailatha711" target="_blank" rel="noopener noreferrer" className="navbar-social-link" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href="https://linkedin.com/in/vijaya-sai-latha" target="_blank" rel="noopener noreferrer" className="navbar-social-link" aria-label="LinkedIn">
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
