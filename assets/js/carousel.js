// Simple auto-rotating carousel for testimonials
const track = document.querySelector(".carousel-track");
let index = 0;

function rotateCarousel() {
  index = (index + 1) % track.children.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(rotateCarousel, 6000);
