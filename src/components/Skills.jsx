const SKILL_GROUPS = [
  {
    icon: 'fas fa-code',
    title: 'Programming Languages',
    chips: ['Python', 'Java', 'TypeScript', 'SQL', 'Scala'],
  },
  {
    icon: 'fas fa-layer-group',
    title: 'Frameworks & Tools',
    chips: ['Spring Boot', 'Node.js', 'React', 'TensorFlow', 'AWS', 'PySpark', 'Kafka'],
  },
  {
    icon: 'fas fa-database',
    title: 'Databases',
    chips: ['MongoDB', 'PostgreSQL'],
  },
  {
    icon: 'fas fa-wrench',
    title: 'Other Tools',
    chips: ['Git', 'Docker', 'PowerBI', 'Cursor'],
  },
]

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-label">What I work with</p>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="skills-layout">
          {SKILL_GROUPS.map((group, i) => (
            <div key={i} className="glass-card skill-group reveal" style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
              <div className="skill-group-icon">
                <i className={group.icon} />
              </div>
              <div className="skill-group-title">{group.title}</div>
              <div className="skill-chips">
                {group.chips.map((chip, j) => (
                  <span key={j} className="skill-chip">{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
