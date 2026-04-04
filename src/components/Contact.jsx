const CONTACT_LINKS = [
  {
    href: 'mailto:vijayasailatha@gmail.com',
    icon: 'fas fa-envelope',
    title: 'Email',
    value: 'vijayasailatha@gmail.com',
  },
  {
    href: 'https://www.linkedin.com/in/vijaya-sai-latha/',
    icon: 'fab fa-linkedin',
    title: 'LinkedIn',
    value: 'linkedin.com/in/vijaya-sai-latha',
    external: true,
  },
  {
    href: 'https://github.com/pvsailatha711',
    icon: 'fab fa-github',
    title: 'GitHub',
    value: 'github.com/pvsailatha711',
    external: true,
  },
]

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Let's connect</p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </div>

        <div className="contact-centered reveal">
          <h3>Let's build something great together</h3>
          <p>
            I'm currently open to new opportunities - whether it's a full-time role,
            interesting project, or just a friendly chat about tech. My inbox is always open!
          </p>

          <div className="contact-links-grid">
            {CONTACT_LINKS.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="contact-link-item"
                id={`contact-${link.title.toLowerCase()}`}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <div className="contact-link-icon">
                  <i className={link.icon} />
                </div>
                <div className="contact-link-text">
                  <span>{link.value}</span>
                </div>
                <i className="fas fa-arrow-right" style={{ marginLeft: 'auto', fontSize: '0.75rem', opacity: 0.4 }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
