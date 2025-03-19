// Toggle navigation menu on small devices
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

if (menuIcon && navLinks) {
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Handle contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message!');
  });
}

// Highlight active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navLinksList = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinksList.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});