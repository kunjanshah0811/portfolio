import { useEffect, useRef } from 'react'

// ──────────────────────────────────────────────────────────
//  AnimatedSection — wraps children in a scroll-triggered
//  fade-up reveal. Uses IntersectionObserver so no lib needed.
// ──────────────────────────────────────────────────────────
export default function AnimatedSection({ children, className = '', delay = 0, style = {} }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`fade-up ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}
