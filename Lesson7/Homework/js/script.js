window.addEventListener('DOMContentLoaded', function () {

  'use strict';
  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  switchTab(0);

  function switchTab(ind) {

    if (ind < 0 || ind >= tab.length) {
      return;
    }

    function hide(el) {
      el.classList.add('hide');
      el.classList.remove('show');
    }

    function show(el) {
      el.classList.add('show');
      el.classList.remove('hide');
    }

    for (let i = 0; i < tabContent.length; i++) {
      i == ind ? show(tabContent[i]) : hide(tabContent[i]);
    }
  }

  info.addEventListener("click", function (event) {
    let target = event.target;

    if (target && target.matches(".info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          switchTab(i);
          break;
        }
      }
    }

  });

});