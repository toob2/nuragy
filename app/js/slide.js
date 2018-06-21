const slides = document.querySelectorAll('.slide__item');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5500);

console.log(slides.length);

function nextSlide(){
   slides[currentSlide].className = 'slide__item';
   currentSlide = (currentSlide+1)%slides.length;
   slides[currentSlide].classList.add('slide__item--showing');
}
