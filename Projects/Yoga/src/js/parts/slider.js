 import Anim from './Animation';

 function slider(elSlider) {
   // Slider __________________________
   let slideIndex = 1,
     slides = elSlider.querySelectorAll('.slider-item'),
     prev = elSlider.querySelector('.prev'),
     next = elSlider.querySelector('.next'),
     dotsWrap = elSlider.querySelector('.slider-dots'),
     dots = elSlider.querySelectorAll('.slider-dots .dot'),
     anim = new Anim();
   showSlide(slideIndex);

   function showSlide(n) {
     // Check and correct selected slide index
     if (n < 1) {
       n = slides.length + (n % slides.length);
     }
     if (n > slides.length) {
       n = (n - 1) % slides.length + 1;
     }
     slideIndex = n;

     slides.forEach((item) => item.style.display = 'none');
     dots.forEach((item) => item.classList.remove('dot-active'));
     slides[n - 1].style.display = 'block';
     dots[n - 1].classList.add('dot-active');


     function drawSlider(progress) {

       slides[n - 1].style.filter = `sepia(${(1-progress)*100}%)`;
       let rt = -10 * (1 - progress);
       slides[n - 1].style.transform = `rotateY(${rt}deg) rotateX(${rt}deg)`;

     }
     anim.animate({
       duration: 2000,
       timing: anim.easeInOutCubic,
       draw: drawSlider
     });
   }

   function nextSlide(n) {
     showSlide(slideIndex + n);
   }

   function currentSlide(n) {
     showSlide(n);
   }

   prev.addEventListener('click', function () {
     nextSlide(-1);
   });
   next.addEventListener('click', function () {
     nextSlide(1);
   });

   dotsWrap.addEventListener('click', function (e) {
     if (e.target && e.target.matches('.dot')) {
       let ind = Array.from(dots).indexOf(e.target);
       if (ind != -1) {
         currentSlide(ind + 1);
       }
     }
   });
 }

 export default slider;