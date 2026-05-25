import { meta } from '../data/portfolio'

const SITEMAP = [
  { label: 'Home',         href: '#hero' },
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Education',    href: '#education' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact',      href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const initials = meta.name.split(' ').map(n => n[0]).join('')

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">{'<'}{initials}{' />'}</div>

          <nav className="footer-sitemap" aria-label="Sitemap">
            {SITEMAP.map(link => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href={meta.linkedin} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-faint)' }}
              onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-faint)'}
            >LinkedIn ↗</a>
            <a href={meta.github} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-faint)' }}
              onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-faint)'}
            >GitHub ↗</a>
            <a href={`mailto:${meta.email}`}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-faint)' }}
              onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-faint)'}
            >Email ↗</a>
          </div>

          <p className="footer-copyright">
            © {year} {meta.name} · All rights reserved
          </p>
          <p className="footer-made">
            Built with <span>React + Vite</span> · Deployed on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  )
}
