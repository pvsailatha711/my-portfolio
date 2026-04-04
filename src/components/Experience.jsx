import { useEffect, useRef } from 'react'

const EXPERIENCES = [
  {
    role: 'Teaching Assistant',
    company: 'University of Texas at Dallas',
    date: 'Sep 2024 - Present',
    bullets: [
      'Teaching creative coding to 6th–12th graders using JavaScript and p5.js.',
      'Grading and supporting CS 3345 (Data Structures & Algorithms) and CS 4337 (Language Paradigms).',
    ],
    tags: ['JavaScript', 'p5.js', 'Data Structures', 'Algorithms'],
  },
  {
    role: 'Software Developer',
    company: 'Infosys Ltd.',
    date: 'Jan 2023 - Jul 2024',
    bullets: [
      'Migrated legacy monolith to microservices for a global Asset Management firm, cutting feature release time across teams.',
      'Built secure RESTful APIs with Spring Boot & PostgreSQL; achieved 90% unit test coverage using JUnit5/Mockito.',
      'Automated CI/CD pipelines via Jenkins on Infosys DevSecOps, accelerating release cycles by 80%.',
      'Implemented distributed tracing with centralized logging for faster root cause analysis across services.',
    ],
    tags: ['Spring Boot', 'PostgreSQL', 'Jenkins', 'JUnit5', 'Mockito', 'Microservices', 'CI/CD'],
  },
  {
    role: 'Programmer Analyst',
    company: 'Cognizant Technology Solutions',
    date: 'Aug 2022 - Nov 2022',
    bullets: [
      'Built and customized Salesforce apps with Lightning Components and third-party API integrations, reducing manual processing by 40%.',
      'Resolved 10+ high-priority defects, improving application stability for client operations.',
    ],
    tags: ['Salesforce', 'Lightning Components', 'REST APIs', 'Apex'],
  },
  {
    role: 'ML Engineer Intern',
    company: 'Indian Servers Ltd.',
    date: 'May 2020 - Aug 2020',
    bullets: [
      'Built a CNN-based Facial Emotion Recognition system using ResNet-50 transfer learning on FER2013, achieving 92% accuracy across 7 emotions.',
      'Optimized real-time inference with TensorFlow Lite quantization and pruning, maintaining F1-score >0.89 for edge deployment.',
    ],
    tags: ['Python', 'TensorFlow', 'CNN', 'ResNet-50', 'TensorFlow Lite', 'OpenCV'],
  },
]

function Experience() {
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
    itemRefs.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Where I've worked</p>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className="timeline-item"
              ref={el => (itemRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="timeline-left">
                <div className="timeline-dot" />
              </div>

              <div className="glass-card timeline-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <span className="exp-date">{exp.date}</span>
                </div>

                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="exp-bullet">{b}</li>
                  ))}
                </ul>

                <div className="exp-tags">
                  {exp.tags.map((tag, j) => (
                    <span key={j} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
