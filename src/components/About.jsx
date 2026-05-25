import AnimatedSection from './AnimatedSection'
import { about } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <AnimatedSection>
          <p className="section-tag">// about.me</p>
          <h2 className="section-title">{about.headline}</h2>
        </AnimatedSection>

        <div className="about-grid" style={{ marginTop: '2.5rem' }}>
          {/* Paragraphs */}
          <AnimatedSection delay={100}>
            <div className="about-text">
              {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </AnimatedSection>

          {/* Collaboration + Open For cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <AnimatedSection delay={200}>
              <div className="collab-card">
                <h4>{about.collaborationTitle}</h4>
                <ul>
                  {about.collaborationPoints.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="collab-card" style={{ borderColor: 'var(--violet)', background: 'var(--violet-dim)' }}>
                <h4 style={{ color: 'var(--violet)' }}>{about.openForTitle}</h4>
                <ul>
                  {about.openForPoints.map((pt, i) => (
                    <li key={i} style={{ '--bullet-color': 'var(--violet)' }}
                      className="about-violet-item">{pt}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
