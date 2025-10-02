/**
 * Video Background Optimizer
 * Improves performance by pausing video when not in viewport
 * and handling reduced motion preferences
 */

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Find all background videos
const backgroundVideos = document.querySelectorAll('video[autoplay][muted]')

backgroundVideos.forEach((video) => {
  // Respect user's motion preferences
  if (prefersReducedMotion) {
    video.pause()
    video.style.display = 'none'
    return
  }

  // Use Intersection Observer to pause video when not visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Video is visible, play it
          video.play().catch((err) => {
            console.log('Video autoplay prevented:', err)
          })
        } else {
          // Video is not visible, pause to save resources
          video.pause()
        }
      })
    },
    {
      threshold: 0.25, // Start playing when 25% visible
    }
  )

  observer.observe(video)

  // Ensure video plays on load (if autoplay fails)
  video.addEventListener('loadedmetadata', () => {
    if (video.readyState >= 2) {
      video.play().catch((err) => {
        console.log('Video autoplay prevented:', err)
      })
    }
  })

  // Handle play errors gracefully
  video.addEventListener('error', (e) => {
    console.log('Video error:', e)
    // Hide video on error, fallback to poster
    video.style.display = 'none'
  })
})

// Optimize video playback rate for slower connections
if (navigator.connection) {
  const connection = navigator.connection
  
  // Slow down video on slower connections to reduce bandwidth
  if (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g') {
    backgroundVideos.forEach((video) => {
      video.playbackRate = 0.5 // Slow down video
    })
  }
}

