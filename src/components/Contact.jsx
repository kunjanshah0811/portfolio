import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import { meta } from '../data/portfolio'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (meta.formspreeId === 'YOUR_FORM_ID') {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${meta.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <AnimatedSection>
          <p className="section-tag">// contact.reach_out()</p>
          <h2 className="section-title">
            Get in <span>Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, want to collaborate, or just want to say hello? I'd love to hear from you.
          </p>
        </AnimatedSection>

        <div className="contact-grid" style={{ marginTop: '3rem' }}>
          {/* Info */}
          <AnimatedSection delay={100}>
            <div className="contact-info">
              <h3>// Direct Contact</h3>

              <a href={`mailto:${meta.email}`} className="contact-detail">
                <span className="contact-detail-icon">✉</span>
                {meta.email}
              </a>
              <div className="contact-detail">
                <span className="contact-detail-icon">📍</span>
                {meta.location}
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon">⚡</span>
                Usually responds within 24 hours
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon">🌍</span>
                Open to relocate
              </div>

              <div className="contact-social">
                <a href={meta.linkedin} target="_blank" rel="noopener noreferrer">
                  <span>in</span> LinkedIn
                </a>
                <a href={meta.github} target="_blank" rel="noopener noreferrer">
                  <span>{'{ }'}</span> GitHub
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={200}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" placeholder="Jane Doe"
                    value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="jane@example.com"
                    value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Project Collaboration"
                  value={form.subject} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project..."
                  value={form.message} onChange={handleChange} required />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
                style={{ alignSelf: 'flex-start' }}
              >
                {status === 'sending' ? '⏳ Sending...' : '📨 Send Message'}
              </button>

              {status === 'success' && (
                <p className="form-status success">✅ Message sent! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="form-status error">
                  {meta.formspreeId === 'YOUR_FORM_ID'
                    ? '⚠️ Configure your Formspree ID in src/data/portfolio.js first.'
                    : '❌ Something went wrong. Try emailing me directly.'}
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
