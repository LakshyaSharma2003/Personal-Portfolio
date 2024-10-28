// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Active Navigation Link
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const navLink = document.querySelector(`nav a[href*=${section.id}]`);
  
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });
  });
  
  // Contact Form Validation
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    const fields = ['name', 'email', 'subject', 'message'];
    for (const field of fields) {
      const input = document.getElementById(field);
      if (!input.value) {
        alert(`${field.charAt(0).toUpperCase() + field.slice(1)} is required.`);
        event.preventDefault();
        return;
      }
    }
  });
  