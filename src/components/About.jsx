import { useEffect, useRef, useState } from 'react'

function useCountUp(target, decimals = 0, trigger) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!trigger) return
    const duration = 1800
    const steps = 60
    const step = duration / steps
    let i = 0
    const timer = setInterval(() => {
      i++
      const progress = i / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(parseFloat((target * eased).toFixed(decimals)))
      if (i >= steps) { setValue(target); clearInterval(timer) }
    }, step)
    return () => clearInterval(timer)
  }, [trigger, target, decimals])

  return value
}

const HIGHLIGHTS = [
  { icon: 'fas fa-graduation-cap', text: 'MS Computer Science - UT Dallas (GPA: 3.81)' },
  { icon: 'fas fa-briefcase', text: '2+ years at Infosys & Cognizant' },
  { icon: 'fas fa-code-branch', text: 'Microservices, REST APIs, CI/CD pipelines' },
  { icon: 'fas fa-brain', text: 'Machine Learning & NLP enthusiast' },
  { icon: 'fas fa-chalkboard-teacher', text: 'Teaching assistant for Data Structures & Algorithms' },
]

function About() {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const experience = useCountUp(2, 0, triggered)
  const technologies = useCountUp(10, 0, triggered)
  const projects = useCountUp(5, 0, triggered)
  const gpa = useCountUp(3.81, 2, triggered)

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        </div>

        <div className="about-grid">
          {/* Text side */}
          <div className="about-text reveal">
            <h3>Hello! I'm <span className="gradient-text">Latha Pulipati</span></h3>
            <p className="about-paragraph">
              I'm a passionate Software Developer with a strong foundation in full-stack development
              and cloud technologies. Currently pursuing my Master's in Computer Science at
              The University of Texas at Dallas, I bring professional experience from leading
              companies like Infosys and Cognizant.
            </p>
            <p className="about-paragraph">
              My expertise lies in modernizing legacy monolithic systems into scalable microservices
              architectures, engineering secure RESTful APIs with Spring Boot, and building robust
              CI/CD pipelines that accelerate delivery cycles.
            </p>
            <p className="about-paragraph">
              Beyond work, I enjoy teaching programming to students, exploring ML research,
              and building tools that make developers' lives easier.
            </p>

            <div className="about-highlights">
              {HIGHLIGHTS.map((h, i) => (
                <div className="highlight-item" key={i}>
                  <div className="highlight-icon">
                    <i className={h.icon} />
                  </div>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats side */}
          <div className="about-cards reveal">
            <div className="glass-card stat-card">
              <span className="stat-number">{experience}+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="glass-card stat-card">
              <span className="stat-number">{technologies}+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="glass-card stat-card">
              <span className="stat-number">{projects}+</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="glass-card stat-card">
              <span className="stat-number">{gpa}</span>
              <span className="stat-label">GPA</span>
            </div>

            <div className="glass-card about-education-card">
              <div className="edu-icon">
                <i className="fas fa-university" />
              </div>
              <div>
                <p className="edu-name">University of Texas at Dallas</p>
                <p className="edu-detail">
                  MS Computer Science &nbsp;·&nbsp; 2024 - Present
                  <span className="edu-gpa">GPA: 3.81</span>
                </p>
              </div>
            </div>

            <div className="glass-card about-education-card">
              <div className="edu-icon">
                <i className="fas fa-graduation-cap" />
              </div>
              <div>
                <p className="edu-name">Koneru Lakshmaiah University</p>
                <p className="edu-detail">
                  B.Tech Computer Science &nbsp;·&nbsp; 2018 - 2022
                  <span className="edu-gpa">GPA: 3.65</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
