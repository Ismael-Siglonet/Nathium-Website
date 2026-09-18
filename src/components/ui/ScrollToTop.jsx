import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return undefined
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      target?.scrollIntoView({ block: 'start', behavior: 'instant' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
