import AnimatedSection from './AnimatedSection'
import { publications } from '../data/portfolio'

export default function Publications() {
  return (
    <section id="publications" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <AnimatedSection>
          <p className="section-tag">// papers.published</p>
          <h2 className="section-title">
            <span>Publications</span>
          </h2>
          <p className="section-subtitle">
            Peer-reviewed works and blog contributions in computational social science and NLP.
          </p>
        </AnimatedSection>

        <div className="pub-list" style={{ marginTop: '2.5rem' }}>
          {publications.map((pub, i) => (
            <AnimatedSection key={pub.title} delay={i * 100}>
              <div className="pub-card">
                <p className="pub-year">{pub.venue} · {pub.year}</p>
                <p className="pub-title">{pub.title}</p>
                {pub.subtitle && <p className="pub-subtitle">{pub.subtitle}</p>}
                {pub.authors && (
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    Authors: {pub.authors}
                  </p>
                )}
                <div className="pub-tags">
                  {pub.tags.map(t => <span key={t} className="tag violet">{t}</span>)}
                </div>
                <a href={pub.url} target="_blank" rel="noopener noreferrer" className="pub-link">
                  📄 View Publication ↗
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
