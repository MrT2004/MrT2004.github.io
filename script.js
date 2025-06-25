const title = document.getElementById('hero-title');
window.addEventListener('scroll', () => {
  const maxScroll = window.innerHeight * 0.6;
  const opacity = 1 - Math.min(window.scrollY / maxScroll, 1);
  title.style.opacity = opacity;
});
