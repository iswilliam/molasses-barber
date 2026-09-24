import { useEffect, useState } from 'react'

/**
 * Watches every element carrying [data-nav-theme] and reports back
 * whichever one currently sits behind the fixed nav bar, so the nav
 * can flip between its light-on-dark and dark-on-light treatments.
 */
export function useNavTheme(navHeight = 84) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-nav-theme]'))
    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTheme(entry.target.getAttribute('data-nav-theme'))
          }
        })
      },
      {
        // A thin trigger line just below the fixed nav.
        rootMargin: `-${navHeight}px 0px -${window.innerHeight - navHeight - 2}px 0px`,
        threshold: 0,
      }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [navHeight])

  return theme
}
