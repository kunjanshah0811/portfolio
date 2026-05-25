import { useState, useEffect } from 'react'
import { meta } from '../data/portfolio'

const NAV_ITEMS = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Education',    href: '#education' },
  { label: 'Publications', href: '#publications' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active, setActive]       = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      // Highlight active nav link
      for (const item of [...NAV_ITEMS].reverse()) {
        const el = document.querySelector(item.href)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(item.href); break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = () => setMenuOpen(false)
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [menuOpen])

  const initials = meta.name.split(' ').map(n => n[0]).join('')

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#hero" className="nav-logo">
            <span>{'<'}</span>{initials}<span>{' />'}</span>
          </a>
          <div className="nav-links">
            {NAV_ITEMS.map(item => (
              <a key={item.href} href={item.href}
                className={active === item.href ? 'active' : ''}>
                {item.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="nav-cta desktop">Hire Me</a>
          <button
            className="nav-hamburger"
            onClick={e => { e.stopPropagation(); setMenuOpen(v => !v) }}
            aria-label="Toggle menu"
          >
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`nav-mobile ${menuOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
        {NAV_ITEMS.map(item => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          💬 Hire Me
        </a>
      </div>
    </>
  )
}
