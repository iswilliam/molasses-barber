const SERVICES = [
  {
    name: 'Beard Trim',
    desc: 'Line-ups, shape, and taper cleaned to the skin, tailored to how your beard actually grows in.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M10 12c0 10 2 20 10 20s10-10 10-20" />
        <path d="M10 12c0-3 4-5 10-5s10 2 10 5" />
        <path d="M14 20c2 1 10 1 12 0" />
      </svg>
    ),
  },
  {
    name: 'Head Shave',
    desc: 'A full clean shave, straight-razor finished, with a scalp massage while the towel does its work.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="20" cy="17" r="10" />
        <path d="M8 32c2-4 7-6 12-6s10 2 12 6" />
      </svg>
    ),
  },
  {
    name: 'Hot Towel Shave',
    desc: 'The full ritual — steamed towels, warm lather, a straight razor, and twenty minutes of quiet.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="8" y="14" width="24" height="14" rx="2" />
        <path d="M8 14c0-4 24-4 24 0" />
        <path d="M14 10c0-2 1-3 1-5M20 10c0-2 1-3 1-5M26 10c0-2 1-3 1-5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Hair &amp; Beauty',
    desc: 'Cuts, color, styling, and beauty services for every guest in the chair — not just the beards.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 30c-4-8-2-18 8-18s12 10 8 18" />
        <path d="M15 22c2 2 8 2 10 0" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" data-nav-theme="light" className="services">
      <div className="wrap">
        <div className="services__head">
          <p className="eyebrow-line eyebrow-amber">What we do</p>
          <h2 className="services__title">Four ways to leave sharper than you came in.</h2>
        </div>

        <div className="services__grid">
          {SERVICES.map((s) => (
            <article key={s.name} className="service-card">
              <div className="service-card__icon">{s.icon}</div>
              <h3 dangerouslySetInnerHTML={{ __html: s.name }} />
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
