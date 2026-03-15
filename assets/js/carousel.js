// Simple auto-rotating carousel for testimonials

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  if (!track) return;

  const items = track.children;
  let index = 0;

  function rotateCarousel() {
    index = (index + 1) % items.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(rotateCarousel, 6000);
});
