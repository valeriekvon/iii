// scroll-tracker.js
window.addEventListener('DOMContentLoaded', () => {
    const flower   = document.getElementById('flower');
    const tracker  = document.querySelector('.scroll-tracker');
    const scrollEl = document.querySelector('.scrollable');
  
    if (!flower || !tracker || !scrollEl) return;
  
    function updateFlowerPosition() {
      const scrollTop     = scrollEl.scrollTop;
      const totalScroll   = scrollEl.scrollHeight;
      const visibleHeight = scrollEl.clientHeight;
      const maxScroll     = Math.max(totalScroll - visibleHeight, 1);
  
      const scrollRatio = scrollTop / maxScroll;
  
      const trackHeight  = tracker.clientHeight;
      const flowerHeight = flower.offsetHeight;
      const maxTranslateY = trackHeight - flowerHeight;
      const newY = scrollRatio * maxTranslateY;
  
      // One full spin (360°) over the full scroll range
      const angle = scrollRatio * 360;
  
      flower.style.transform = `translateX(-50%) translateY(${newY}px) rotate(${angle}deg)`;
    }
  
    // Initial placement + rotation
    updateFlowerPosition();
  
    // Update on every inner‐scroll event
    scrollEl.addEventListener('scroll', updateFlowerPosition);
  });
  