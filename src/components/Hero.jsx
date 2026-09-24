import heroPhoto from '../assets/barbershop-12.jpg'

export default function Hero() {
  return (
    <section id="top" className="hero" data-nav-theme="dark">
      <img src={heroPhoto} alt="" className="hero__bg" aria-hidden="true" />
      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__pour" aria-hidden="true" />
      <div className="wrap hero__inner">
        <p className="eyebrow-line rise-in">Atlanta, since the chair still had a straight razor strop</p>

        <h1 className="hero__headline rise-in" style={{ animationDelay: '0.08s' }}>
          A slower kind of
          <br />
          sharp.
        </h1>

        <p className="hero__sub rise-in" style={{ animationDelay: '0.18s' }}>
          Beard trims, head shaves, hot towel shaves, and hairstyling done
          at a pace that respects the craft — and the twenty minutes
          you finally carved out for yourself.
        </p>

        <div className="hero__actions rise-in" style={{ animationDelay: '0.28s' }}>
          <a href="tel:+14043731760" className="btn btn-gold">Call Now (404) 373-1760</a>
          <a href="#services" className="btn btn-ghost-dark">See services</a>
        </div>
      </div>

      <div className="hero__glass glass-on-dark rise-in" style={{ animationDelay: '0.4s' }}>
        <div>
          <strong>Walk-ins</strong>
          <span>welcomed most afternoons</span>
        </div>
        <div className="hero__glass-div" />
        <div>
          <strong>Tue – Sat</strong>
          <span>9:00a – 7:00p</span>
        </div>
      </div>
    </section>
  )
}
