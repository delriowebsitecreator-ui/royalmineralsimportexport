const nav = document.getElementById('nav');
window.addEventListener('scroll', function() {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});
function toggleMenu() {
  document.getElementById('mob').classList.toggle('open');
}
var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e, i) {
    if (e.isIntersecting) {
      setTimeout(function() { e.target.classList.add('on'); }, i * 100);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });
document.querySelectorAll('.reveal').forEach(function(r) { obs.observe(r); });
function handleSubmit() {
  var b = document.querySelector('.fsub');
  b.textContent = '\u2713 Inquiry Received — We Will Respond Shortly';
  b.style.background = '#1a5c30';
  b.style.borderColor = '#1a5c30';
  b.disabled = true;
  setTimeout(function() {
    b.textContent = 'Submit Inquiry →';
    b.style.background = '';
    b.style.borderColor = '';
    b.disabled = false;
  }, 5000);
}
