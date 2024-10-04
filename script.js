function buyNow() {
  alert("Thank you for your purchase!");
}


let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  
  // Adjusting to show 4 products per view
  const slidesToShow = 4;
  const maxSlide = totalSlides / slidesToShow;
  
  currentSlide = (currentSlide + direction + maxSlide) % maxSlide;
  
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
