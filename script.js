// Auto-color availability text based on the specific utility class
document.querySelectorAll('#STYLES .item p.stock-status').forEach(p => {
  const text = p.textContent.toLowerCase();
  p.style.color = (text.includes('out') || text.includes('stock')) ? '#e53935' : '#4caf50';
});

// Active navigation highlight on scroll
const sections = document.querySelectorAll('main > div');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});