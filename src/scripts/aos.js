/**
 * AOS (Animate On Scroll) initialization
 * Provides scroll-triggered animations for elements
 */

// AOS will be loaded via CDN in the layout
// This script initializes it with custom settings

document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      // Global settings
      duration: 800, // Animation duration in ms
      easing: 'ease-out-cubic', // Easing function
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // Defines which position of the element should trigger animation
      offset: 100, // Offset (in px) from the trigger point
      delay: 0, // Default delay in ms
      
      // Mobile settings
      disable: false, // Disable AOS on mobile if needed (accepts: 'phone', 'tablet', 'mobile', or boolean)
      
      // Animation settings
      startEvent: 'DOMContentLoaded', // Event name to start animations
      
      // Advanced settings
      useClassNames: false, // If true, will add `data-aos` as classes on scroll
      disableMutationObserver: false, // Disables automatic mutations' detections
      debounceDelay: 50, // Delay on debounce used while resizing window
      throttleDelay: 99, // Delay on throttle used while scrolling the page
    })

    // Refresh AOS on dynamic content changes
    const observer = new MutationObserver(() => {
      AOS.refresh()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  }
})

// Refresh AOS when page becomes visible (for better UX when navigating back)
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && typeof AOS !== 'undefined') {
    AOS.refresh()
  }
})

