// Hamburger menu toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Холбоо барих toggle
const contactToggle = document.querySelector('.contact-toggle');
const contactInfo = document.querySelector('.contact-info');

contactToggle.addEventListener('click', () => {
  if(contactInfo.style.display === "block") {
    contactInfo.style.display = "none";
    contactToggle.textContent = "Холбоо барих ▼";
  } else {
    contactInfo.style.display = "block";
    contactToggle.textContent = "Холбоо барих ▲";
  }
});
