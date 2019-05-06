window.addEventListener("DOMContentLoaded", function () {

  // Check browsers
  var isIE = /*@cc_on!@*/ false || !!document.documentMode; // Internet Explorer 6-11
  var isEdge = !isIE && !!window.StyleMedia; // Edge 20+
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  let btnJS = document.querySelector("button.js"),
    btnCSS = document.querySelector("button.css"),
    btnBrowser = document.querySelector("button.browser"),
    close = document.querySelector(".popup-close"),
    popupW = document.querySelector(".popup-window");

  // Check browser
  btnBrowser.addEventListener('click', function () {
    if (!isMobile.any()) {
      if (isIE || isEdge) {
        setCSSAnimation();
      } else {
        setJSAnimation();
      }
    }else{
      popupW.classList.add("popup-mobile-animated");
    }
  });

  // Add event handlers
  btnCSS.addEventListener("click", setCSSAnimation);
  btnJS.addEventListener('click', setJSAnimation);
  document.body.addEventListener("click", function (e) {
    if (e.target && e.target != close && e.target.tagName == "BUTTON") {
      document.body.classList.add("popup-opened");
    }
  });

  close.addEventListener("click", function () {
    document.body.classList.remove("popup-opened");
    popupW.classList.remove("popup-animated");
    popupW.classList.remove("popup-css-animated","popup-js-animated","popup-mobile-animated");
  });


  function setCSSAnimation() {
    popupW.classList.add("popup-animated");
    popupW.classList.add("popup-css-animated");
  }

  function setJSAnimation() {
    animateModal({
      duration: 2000,
      timing: easeInOutCubic,
      draw: drawPopup
    });
    popupW.classList.add("popup-js-animated");
  }

  // Animation
  function drawPopup(progress) {
    // Top
    let to = 25;
    let from = 30;
    let delta = (to - from) * progress;
    popupW.style.top = from + delta + "%";

    // Left
    to = 50;
    from = 60;
    delta = (to - from) * progress;
    popupW.style.left = from + delta + "%";

    // backgorund
    from = 100;
    to = 0;
    delta = (to - from) * progress;
    let to2 = 100;
    let from2 = 40;
    let delta2 = (to2 - from2) * progress;
    popupW.style.backgroundColor = `hsl(118, ${from + delta}%, ${from2 + delta2}%)`;
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  function animateModal(options) {
    let start = performance.now();

    requestAnimationFrame(function anim(time) {
      let timeFraction = (performance.now() - start) / options.duration;
      if (timeFraction > 1) {
        timeFraction = 1;
      }

      let progress = options.timing(timeFraction);
      options.draw(progress);


      if (timeFraction < 1) {
        requestAnimationFrame(anim);
      }
    });
  }



});