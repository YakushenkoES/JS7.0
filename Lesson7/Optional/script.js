document.addEventListener("DOMContentLoaded", function () {

  let heart = document.querySelector(".heart"),
    height = parseFloat(window.getComputedStyle(heart, null).height), 
    start = document.querySelector(".start"),
    animActive = false,
    hrCtrl = document.querySelector("#hr"),
    HR = +hrCtrl.value;


  hrCtrl.addEventListener("input", function () {
    HR = +this.value;
  });

  // toggle animation
  let options = {
    timing: heartTiming,
    draw: heartDraw,
    requestID: undefined
  };
  start.addEventListener("click", function () {
    if (!animActive) {
      animate(options);
      start.textContent = "Стоп";
    } else {
      cancelAnimationFrame(options.requestID);
      heart.style.height = height + "px"; // Reset size
      start.textContent = "Старт";
    }
    animActive = !animActive;
  });

  function heartTiming(time) {
    let period = 1 / (HR / 60) * 1000;
    time = time % (period);

    // gauss
    let sigma = 50;
    let mean = period / 2;
    let gain = 10;
    let progress = gain * 1 / (sigma * Math.sqrt(Math.PI * 2)) *
      Math.pow(Math.E, -((Math.pow(time - mean, 2)) / (2 * Math.pow(sigma, 2))));

    return progress;
  }

  function heartDraw(progress) {
    heart.style.height = height * (1 + progress) + "px";
  }

  function animate(options) {

    let start = performance.now(); // Get time
    let bDur = options.duration != undefined; // Check if duration is setted
    options.requestID = requestAnimationFrame(function animate(time) { // Call animation

      let passedTime = time - start; // Get passe time

      // Check duration
      if (bDur && passedTime > options.duration) {
        passedTime = options.duration;
      }

      // Calc
      let progress = options.timing(passedTime);
      options.draw(progress);

      // Recursive call animation
      if (bDur ? passedTime < options.duration : true) {
        options.requestID = requestAnimationFrame(animate);
      }

    });
  }
});