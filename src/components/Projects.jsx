import { useEffect, useRef } from 'react'

const PROJECTS = [
  {
    icon: 'fas fa-mouse-pointer',
    name: 'ClickWorthy',
    description:
      'Distributed microservices application using Spring Boot, Python, and Apache Kafka that detects YouTube clickbait through NLP analysis of video titles and computer vision analysis of thumbnails. Built a Chrome extension with REST APIs, asynchronous message processing, and real-time clickbait scoring with customizable UI indicators.',
    tags: ['Spring Boot', 'Python', 'Apache Kafka', 'NLP', 'Computer Vision', 'Chrome Extension'],
    github: 'https://github.com/pvsailatha711/ClickWorthy',
  },
  {
    icon: 'fas fa-camera-retro',
    name: 'Photo Sharing App',
    description:
      'Full-stack photo-sharing web application using React, Material-UI, Express.js, and MongoDB with session-based authentication, RESTful API endpoints, and real-time features including photo uploads, commenting, and advanced routing.',
    tags: ['React', 'Material-UI', 'Express.js', 'MongoDB', 'REST API'],
    github: 'https://github.com/pvsailatha711/Photo-Sharing-App',
  },
  {
    icon: 'fas fa-database',
    name: 'PalladiumSQL',
    description:
      'Lightweight relational DBMS in Java implementing B+ tree indexing for optimized data retrieval. Supports SQL operations (CREATE, INSERT, SELECT, UPDATE, DELETE) with custom page-based storage and efficient query parsing.',
    tags: ['Java', 'B+ Tree', 'SQL', 'Database Design'],
    github: 'https://github.com/pvsailatha711/DB-Davis',
  },
  {
    icon: 'fas fa-chart-line',
    name: 'Bitcoin Price Prediction',
    description:
      'Evaluated RNN-LSTM, Bi-LSTM, and Bi-GRU models to predict Bitcoin prices using CoinMarketCap data. Bi-LSTM and Bi-GRU outperformed RNN-LSTM, achieving higher accuracy. Applied data preprocessing, model tuning, and performance evaluation to support reliable time-series forecasting.',
    tags: ['Python', 'LSTM', 'Bi-GRU', 'Deep Learning', 'Time Series', 'TensorFlow'],
    github: 'https://github.com/pvsailatha711/Bitcoin-Price-Prediction',
  },
]

function Projects() {
  const cardRefs = useRef([])

  useEffect(() => {
    // Reveal on scroll
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('in-view')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    cardRefs.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label">What I've built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of projects spanning distributed systems, ML, and
            full-stack web development.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="glass-card project-card reveal"
              ref={el => (cardRefs.current[i] = el)}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <div className="project-top">
                <div className="project-icon-box">
                  <i className={p.icon} />
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-gh-link"
                  title="View on GitHub"
                  id={`project-gh-${i}`}
                >
                  <i className="fab fa-github" />
                </a>
              </div>

              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.description}</p>

              <div className="project-tags">
                {p.tags.map((tag, j) => (
                  <span key={j} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
