// Deep Sea Gallery - Lazy Loading with Intersection Observer
// Retro aquarium terminal aesthetic maintained

(function() {
  'use strict';

  const observerConfig = {
    root: null,
    rootMargin: '50px',
    threshold: 0.01
  };

  let observer;

  function initLazyLoad() {
    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers - load all images
      loadAllImages();
      return;
    }

    observer = new IntersectionObserver(handleIntersection, observerConfig);

    const lazyImages = document.querySelectorAll('.gallery-item[data-src]');
    lazyImages.forEach(item => observer.observe(item));
  }

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const item = entry.target;
        loadImage(item);
        observer.unobserve(item);
      }
    });
  }

  function loadImage(item) {
    const img = item.querySelector('img');
    const src = item.getAttribute('data-src');

    if (src && img) {
      img.src = src;
      img.classList.add('loaded');
      item.classList.add('loaded');
    }
  }

  function loadAllImages() {
    const lazyImages = document.querySelectorAll('.gallery-item[data-src]');
    lazyImages.forEach(loadImage);
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLazyLoad);
  } else {
    initLazyLoad();
  }
})();
