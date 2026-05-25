import { useState, useEffect } from 'react'
import { meta, hero } from '../data/portfolio'

// ── Simple typewriter hook ──────────────────────
function useTypewriter(strings, speed = 65, pause = 2200) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx]         = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const str = strings[idx]
    if (!deleting && charIdx < str.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), speed)
      return () => clearTimeout(t)
    }
    if (!deleting && charIdx === str.length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
      return () => clearTimeout(t)
    }
    if (deleting && charIdx === 0) {
      setDeleting(false)
      setIdx(i => (i + 1) % strings.length)
    }
  }, [charIdx, deleting, idx, strings, speed, pause])

  useEffect(() => {
    setDisplay(strings[idx].slice(0, charIdx))
  }, [charIdx, idx, strings])

  return display
}

export default function Hero() {
  const typed = useTypewriter(hero.taglines)
  const [imgError, setImgError] = useState(false)

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">

          {/* ── Left: text ───────────────────── */}
          <div>
            <p className="hero-greeting">$ whoami</p>
            <h1 className="hero-name">
              <span className="first">{meta.name.split(' ')[0]} </span>
              <span className="last">{meta.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="hero-title">{meta.title}</p>

            <p className="hero-typewriter">▸ {typed}</p>

            <div className="hero-badges">
              {hero.badges.map(b => (
                <span key={b} className="tag">{b}</span>
              ))}
            </div>

            {/* Open-source highlight */}
            <a
              href={hero.openSourceHighlight.url}
              target="_blank" rel="noopener noreferrer"
              className="hero-oss"
            >
              <span>⭐</span>
              <span className="oss-label">{hero.openSourceHighlight.label}&nbsp;</span>
              <span className="oss-name">{hero.openSourceHighlight.project}</span>
              <span style={{ color: 'var(--text-faint)', margin: '0 0.25rem' }}>—</span>
              <span style={{ color: 'var(--text-muted)' }}>{hero.openSourceHighlight.detail}</span>
            </a>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">💬 Let's Talk</a>
              <a href="#projects" className="btn btn-outline">View Work ↓</a>
              <a href={meta.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                GitHub ↗
              </a>
            </div>
          </div>

          {/* ── Right: photo ─────────────────── */}
          <div className="hero-photo-wrap">
            <div className="hero-photo-ring">
              {!imgError ? (
                <img
                  src={meta.photo}
                  alt={meta.name}
                  className="hero-photo"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="hero-photo-placeholder">👨‍💻</div>
              )}
            </div>
            <div className="hero-social">
              <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                in
              </a>
              <a href={meta.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                gh
              </a>
              <a href={`mailto:${meta.email}`} title="Email">
                ✉
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-indicator">
        <span>scroll</span>
        <span>↓</span>
      </div>
    </section>
  )
}
