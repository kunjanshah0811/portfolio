import AnimatedSection from './AnimatedSection'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <AnimatedSection>
          <p className="section-tag">// work.history</p>
          <h2 className="section-title">
            Work <span>Experience</span>
          </h2>
        </AnimatedSection>

        <div className="timeline" style={{ marginTop: '3rem' }}>
          {experience.map((job, i) => (
            <AnimatedSection key={job.company} delay={i * 120} className="timeline-item">
              <div className="timeline-dot" />
              <p className="timeline-period">{job.period} · {job.location}</p>
              <p className="timeline-role">{job.role}</p>
              <p className="timeline-company">
                <a href={job.url} target="_blank" rel="noopener noreferrer">
                  {job.company} ↗
                </a>
              </p>
              <ul className="timeline-highlights">
                {job.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
