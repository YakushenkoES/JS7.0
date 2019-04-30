window.addEventListener("DOMContentLoaded", function () {
  'use strict';
  // Добавить обработчик ко всем a
  document.body.addEventListener("click", function (e) {
    if (e.target && e.target.matches("a")) {
      e.preventDefault();
      let elTo = document.querySelector(e.target.getAttribute("href"));
      scroll(elTo.offsetTop);
    }
  });

  // Функция прокрутки
  function scroll(pos) {

    // Фиксрованное меню высотой 50
    let menuHeigth = 50;

    // Откуда и куда сделат прокрутку
    let from = document.documentElement.scrollTop;
    let to = pos - menuHeigth;

     // Запуск анимации прокрутки
    animate({
      duration: 500,
      draw: changeScroll,
      timing: easeInOutCubic
    });

    function animate(options) {
      let start = performance.now();

      requestAnimationFrame(function animate(time) {

        // Какая часть времени прошла?
        let timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) {
          timeFraction = 1;
        }

        // Отрисовка анимации
        let progress = options.timing(timeFraction);
        options.draw(progress);

        // Закончить анимацию?
        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        }

      });
    }

    function changeScroll(progress) {
      let delta = (to - from) * progress;
      scrollTo(0, from + delta);
    }

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

  }
});