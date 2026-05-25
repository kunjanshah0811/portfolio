import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import { projects } from '../data/portfolio'

const FILTERS = ['All', 'Featured', 'Open Source', 'AI/LLM', 'Full-Stack']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = projects.filter(p => {
    if (filter === 'All')         return true
    if (filter === 'Featured')    return p.featured
    if (filter === 'Open Source') return p.openSource
    if (filter === 'AI/LLM')      return p.tags.some(t => ['LLM','RAG','NLP','Fine-Tuning','LangChain','Agentic AI'].includes(t))
    if (filter === 'Full-Stack')  return p.tags.some(t => ['FastAPI','React','Django','Full-Stack'].includes(t))
    return true
  })

  return (
    <section id="projects" className="section">
      <div className="container">
        <AnimatedSection>
          <p className="section-tag">// projects.filter(cool)</p>
          <h2 className="section-title">
            Key <span>Projects</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="projects-filter" style={{ marginTop: '2rem' }}>
            {FILTERS.map(f => (
              <button
                key={f}
                className={`skills-tab ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="projects-grid">
          {filtered.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 80}>
              <div className={`project-card ${p.featured ? 'featured' : ''}`}>
                <div className="project-header">
                  <div>
                    <div className="project-title">{p.title}</div>
                    <div className="project-org">{p.org}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', alignItems: 'flex-end' }}>
                    {p.grade && <span className="project-grade">⭐ {p.grade}</span>}
                    {p.openSource && <span className="oss-badge">🔓 OSS</span>}
                  </div>
                </div>

                <p className="project-desc">{p.description}</p>

                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project ↗
                  </a>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
