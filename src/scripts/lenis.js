/**
 * Lenis Smooth Scroll initialization
 * Provides smooth, momentum-based scrolling across the entire site
 */

import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// Wait for DOM to be ready
if (typeof window !== 'undefined') {
  // Initialize Lenis
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
  })

  // Animation frame loop
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // Add smooth scroll to anchor links after DOM loads
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          lenis.scrollTo(target, {
            offset: -80, // Offset for fixed header
            duration: 1.5,
          })
        }
      })
    })
  })

  // Expose lenis globally for integration with other libraries
  window.lenis = lenis
}

