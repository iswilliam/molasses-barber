import craftPhoto from '../assets/barbershop-10.jpg'

export default function Craft() {
  return (
    <section id="craft" data-nav-theme="light" className="craft">
      <div className="wrap craft__grid">
        <div className="craft__art">
          <img src={craftPhoto} alt="Barber giving a client a straight-razor beard shave and brush finish" />
          <div className="craft__art-drip" aria-hidden="true" />
        </div>

        <div className="craft__copy">
          <p className="eyebrow-line eyebrow-amber">Our craft</p>
          <h2>Every service starts the same way — slower than you'd expect.</h2>
          <p className="craft__lede">
            Molasses doesn't move fast, and neither do we. Every chair starts
            with a real consultation, every shave gets the full hot towel
            routine, and every cut ends with a mirror check we actually want
            you to look at.
          </p>

          <dl className="craft__stats">
            <div>
              <dt>Chairs</dt>
              <dd>6 barbers &amp; stylists</dd>
            </div>
            <div>
              <dt>Booked out</dt>
              <dd>Most days, by 3pm</dd>
            </div>
            <div>
              <dt>Straight razors</dt>
              <dd>Stropped, not disposable</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
