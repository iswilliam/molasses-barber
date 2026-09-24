export function CtaBand() {
  return (
    <section id="visit" data-nav-theme="dark" className="cta-band">
      <div className="wrap cta-band__inner">
        <h2>
          Grab a chair before
          <br />
          it fills up for the week.
        </h2>
        <div className="cta-band__actions">
          <a href="tel:+14043731760" className="btn btn-gold">Call Now (404) 373-1760</a>
          <p className="cta-band__hours">
            Tue – Sat, 9:00a – 7:00p &nbsp;·&nbsp; Closed Sun &amp; Mon
          </p>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer data-nav-theme="dark" className="site-footer">
      <div className="wrap site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__mark">Molasses Barber &amp; Beauty</p>
          <p>1084 Cascade Ave SW, Atlanta, GA</p>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__label">Hours</p>
          <p>Tue – Sat &nbsp;9:00a – 7:00p</p>
          <p>Sun &amp; Mon &nbsp;Closed</p>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__label">Reach us</p>
          <a href="tel:+14043731760">(404) 373-1760</a>
          <p>@molassesbarber</p>
        </div>
      </div>

      <div className="wrap site-footer__bottom">
        <p>© {new Date().getFullYear()} Molasses Barber &amp; Beauty.</p>
      </div>
    </footer>
  )
}
