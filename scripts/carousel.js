const carousel = document.querySelector('#carousel div');
const images = carousel.children;
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselItemAlt = document.getElementById('carouselItemAlt'); // Element to display the alt text

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100; // Move the carousel by 100% per image
  carousel.style.transform = `translateX(${offset}%)`;

  // Update the alt text in #carouselItemAlt
  const currentImage = images[currentIndex];
  carouselItemAlt.textContent = currentImage.alt || 'No description available';
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

// Initialize the carousel alt text on page load
updateCarousel();
