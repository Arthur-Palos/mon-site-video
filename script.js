// Animation fade-in au scroll
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.fade-in');
  function showElements() {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  }
  showElements();
  window.addEventListener('scroll', showElements);
});
