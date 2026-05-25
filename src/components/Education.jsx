import AnimatedSection from './AnimatedSection'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <AnimatedSection>
          <p className="section-tag">// education.log</p>
          <h2 className="section-title">
            <span>Education</span>
          </h2>
        </AnimatedSection>

        <div className="edu-grid" style={{ marginTop: '2.5rem' }}>
          {education.map((edu, i) => (
            <AnimatedSection key={edu.institution} delay={i * 120}>
              <div className="edu-card">
                <p className="edu-period">{edu.period}</p>
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-institution">
                  <a href={edu.url} target="_blank" rel="noopener noreferrer">
                    {edu.institution} ↗
                  </a>
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{edu.location}</p>
                <span className="edu-gpa">GPA {edu.gpa}</span>
                {edu.notes && <p className="edu-notes">{edu.notes}</p>}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
