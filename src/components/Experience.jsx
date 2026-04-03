import { useEffect, useRef } from 'react'

const EXPERIENCES = [
  {
    role: 'Teaching Assistant',
    company: 'University of Texas at Dallas',
    date: 'Sep 2024 - Present',
    bullets: [
      'Instructing 6th-12th grade students in creative coding using JavaScript and p5.js, designing hands-on lessons and interactive projects to enhance programming fundamentals.',
      'Grading assignments and assisting for CS 3345 - Data Structures & Algorithms, providing consistent feedback and maintaining high academic standards.',
      'Previously assisted for CS 4337 - Language Paradigms.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Infosys Ltd.',
    date: 'Jan 2023 - Jul 2024',
    bullets: [
      'Modernized a legacy monolithic system into a scalable microservices architecture for one of the leading Asset Management Companies, improving modularity and maintainability, which reduced feature release time across global teams.',
      'Engineered secure RESTful APIs with Spring Boot and PostgreSQL, enabling seamless integration with frontend apps. Achieved 90% unit test coverage using JUnit5/Mockito, increasing code reliability and reducing production defects.',
      'Automated CI/CD pipelines using Jenkins on Infosys DevSecOps, integrating security checks and deployment automation - accelerating release cycles by 80% and ensuring secure, production-ready builds.',
      'Implemented distributed tracing and request correlation across microservices using centralized logging and trace identifiers, enabling faster root cause analysis of cross-service failures and improving debugging efficiency for production incidents.',
    ],
  },
  {
    role: 'Programmer Analyst',
    company: 'Cognizant Technology Solutions',
    date: 'Aug 2022 - Nov 2022',
    bullets: [
      'Developed and customized Salesforce applications using Lightning Components and third-party API integrations, reducing manual processing time by 40%.',
      'Debugged and resolved 10+ high-priority defects, improving Salesforce application stability and ensuring smooth client operations.',
    ],
  },
  {
    role: 'ML Engineer Intern',
    company: 'Indian Servers Ltd.',
    date: 'May 2020 - Aug 2020',
    bullets: [
      'Worked on a CNN-based FER system leveraging ResNet-50 transfer learning on FER2013 dataset; applied comprehensive data augmentation techniques (rotations/flips/brightness adjustments) to achieve 92% classification accuracy across 7 distinct emotions.',
      'Optimized real-time inference with TensorFlow Lite quantization and pruning alongside systematic ablation studies, successfully reducing latency while maintaining F1-score >0.89 for edge-deployable affective computing applications.',
    ],
  },
]

function Experience() {
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
