import { useState, useEffect, useRef } from 'react'
import AnimatedSection from './AnimatedSection'
import { skillCategories } from '../data/portfolio'

// Emoji map for skill icons (no dependency needed)
const ICON_MAP = {
  SiPython:       '🐍',
  SiPostgresql:   '🐘',
  SiReact:        '⚛️',
  SiR:            'R',
  SiHtml5:        '🌐',
  SiFastapi:      '⚡',
  SiDocker:       '🐳',
  SiGithubactions:'🔄',
  SiGooglecloud:  '☁️',
  SiDjango:       '🎸',
  SiPytorch:      '🔥',
  SiScikitlearn:  '🤖',
  SiPandas:       '🐼',
  SiElasticsearch:'🔍',
  SiSelenium:     '🕷️',
  SiLangchain:    '⛓️',
  SiHuggingface:  '🤗',
  'custom-rag':   '📄',
  'custom-llm':   '🧠',
  'custom-nlp':   '📝',
  'custom-vector':'📐',
  'custom-research':'📚',
  'custom-comm':  '💬',
  'custom-problem':'🎯',
  'custom-collab':'🤝',
  'custom-learn': '🚀',
}

function SkillBar({ skill, animate }) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">
          <span>{ICON_MAP[skill.icon] || '●'}</span>
          {skill.name}
        </span>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div
          className={`skill-bar-fill ${skill.level >= 85 ? 'green-bar' : ''}`}
          style={{ width: animate ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const [animate, setAnimate]     = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setAnimate(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  // Reset animation on tab change
  const handleTab = (i) => {
    setAnimate(false)
    setActiveTab(i)
    requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)))
  }

  const category = skillCategories[activeTab]

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <AnimatedSection>
          <p className="section-tag">// skills.map()</p>
          <h2 className="section-title">
            Tech <span>Stack</span>
          </h2>
          <p className="section-subtitle">
            Tools and technologies I use to build AI systems and full-stack applications.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="skills-tabs" style={{ marginTop: '2rem' }}>
            {skillCategories.map((cat, i) => (
              <button
                key={cat.category}
                className={`skills-tab ${activeTab === i ? 'active' : ''}`}
                onClick={() => handleTab(i)}
              >
                {cat.icon} {cat.category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div ref={ref} className="skills-grid">
          {category.skills.map((skill, i) => (
            <AnimatedSection key={skill.name} delay={i * 60}>
              <SkillBar skill={skill} animate={animate} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
