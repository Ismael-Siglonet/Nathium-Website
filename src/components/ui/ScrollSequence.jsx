import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const completedReveals = new Set()

function ScrollSequence() {
  const location = useLocation()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))
    const revealKeys = new Map(
      elements.map((element, index) => [element, `${location.pathname}:${index}`])
    )
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    document.documentElement.classList.add('motion-enabled')

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          completedReveals.add(revealKeys.get(entry.target))
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -10% 0px' }
    )

    elements.forEach((element) => {
      if (completedReveals.has(revealKeys.get(element))) {
        element.classList.add('is-visible')
        return
      }

      observer.observe(element)
    })
    return () => observer.disconnect()
  }, [location.pathname])

  return null
}

export default ScrollSequence
