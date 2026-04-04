import { useState, useEffect } from 'react'

const TITLES = [
  'Software Developer',
  'Backend & Full-Stack Engineer',
  'ML & AI Enthusiast',
]

function useTypewriter(texts) {
  const [displayed, setDisplayed] = useState('')
  const [titleIdx, setTitleIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[titleIdx]
    let delay = deleting ? 40 : 90

    if (!deleting && charIdx === current.length) {
      delay = 2200
    } else if (deleting && charIdx === 0) {
      delay = 400
    }

    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplayed(current.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      } else if (deleting && charIdx > 0) {
        setDisplayed(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true)
      } else if (deleting && charIdx === 0) {
        setDeleting(false)
        setTitleIdx(i => (i + 1) % texts.length)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [charIdx, deleting, titleIdx, texts])

  return displayed
}

function Hero() {
  const title = useTypewriter(TITLES)

  return (
    <section className="hero section" id="home">
      <div className="container">
        <div className="hero-layout">
          {/* Left - text */}
          <div className="hero-content">

            <h1 className="hero-name">
              <span className="gradient-text">Latha Pulipati</span>
            </h1>

            <h2 className="hero-tagline">
              {title}
              <span className="cursor" />
            </h2>

            <p className="hero-description">
              Hi, I'm Latha, a software developer and MS Computer Science student at UT Dallas.
              I've spent the last few years building things that scale - microservices at Infosys,
              Salesforce solutions at Cognizant, and ML systems from facial recognition to
              LLM-powered browser automation. I care about writing clean, reliable code
              and shipping software that actually works in production.
            </p>

          </div>


        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-chevrons">
          <span>❯</span>
          <span>❯</span>
          <span>❯</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
