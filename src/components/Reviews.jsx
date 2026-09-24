import salonPhoto from '../assets/hair-salon-12.jpg'

const REVIEWS = [
  {
    quote: "First hot towel shave I've had since my grandfather took me as a kid. Twenty minutes felt like a full reset.",
    name: 'Marcus D.',
  },
  {
    quote: "My stylist actually listened before touching a single layer. First cut in years I didn't have to fix at home.",
    name: 'Renee A.',
  },
  {
    quote: "Booked a head shave on a whim during lunch. Walked out to a 2pm meeting looking like I planned my whole week around it.",
    name: 'Theo K.',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" data-nav-theme="light" className="reviews">
      <div className="wrap">
        <p className="eyebrow-line eyebrow-amber">In their words</p>
        <div className="reviews__layout">
          <img
            src={salonPhoto}
            alt="Stylist washing a client's hair at the shampoo station"
            className="reviews__photo"
          />
          <div className="reviews__grid">
            {REVIEWS.map((r) => (
              <figure key={r.name} className="review-card">
                <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption>{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
