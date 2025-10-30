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

// Hero carousel functions
let slides = [];
let currentSlide = 0;
const heroContainer = document.getElementById("hero-container");

function showSlide(index) {
  if(slides.length === 0) return;
  slides.forEach((slide, i) => slide.style.display = i === index ? "block" : "none");
  currentSlide = index;
}

function nextSlide() {
  showSlide((currentSlide + 1) % slides.length);
}

// Swipe support for mobile
let startX = 0;
heroContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

heroContainer.addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;
  if (endX - startX > 50) {
    // Swipe right
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  } else if (startX - endX > 50) {
    // Swipe left
    showSlide((currentSlide + 1) % slides.length);
  }
});

// Firebase-аас мэдээ авч ирсний дараа hero slide update
function updateHeroSlides(newSlides) {
  slides = newSlides;
  if(slides.length > 0) showSlide(0);
  if(slides.length > 1) setInterval(nextSlide, 4000); // 4 секунд тутам автоматаар шилжих
}
