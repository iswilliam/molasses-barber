import { useEffect, useState } from 'react'
import { useNavTheme } from '../hooks/useNavTheme'

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#craft', label: 'Our Craft' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#visit', label: 'Visit' },
]

export default function Navbar() {
  const theme = useNavTheme(84)
  const [open, setOpen] = useState(false)
  const isDark = theme === 'dark'

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`nav ${isDark ? 'nav--dark' : 'nav--light'}`}>
      <div className="wrap nav__inner">
        <a href="#top" className="nav__mark">
          Molasses<span>Barber &amp; Beauty</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a href="tel:+14043731760" className="nav__call">
          (404) 373-1760
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__sheet">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="tel:+14043731760" className="nav__sheet-call" onClick={() => setOpen(false)}>
            Call (404) 373-1760
          </a>
        </div>
      )}
    </header>
  )
}
