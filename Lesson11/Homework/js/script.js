window.addEventListener('DOMContentLoaded', () => {

  'use strict';

  // Form ___________________________
  let message = {
    loading: 'Загрузка',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let forms = document.querySelectorAll("form.main-form, form#form"),
    statusMessage = document.createElement('div');

  statusMessage.classList.add('status');
  forms.forEach((form) => {
    let inputs = form.getElementsByTagName('input');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
console.log("submit");
      form.appendChild(statusMessage);

      let req = new XMLHttpRequest();

      req.addEventListener('readystatechange', () => {
        if (req.readyState < 4) {
          statusMessage.textContent = message.loading;
        } else if (req.readyState === 4 && req.status === 200) {
          statusMessage.textContent = message.success;
        } else {
          statusMessage.textContent = message.failure;
        }

      });

      // Могу забыть поменять на 'server.php'
      req.open('POST', 'http://yoga.local/server.php'); // Для openserver в другом домене и кросс-доменными запросами
      // req.open('POST','server.php'); // Для случая, когда и страница и php в одном домене


      // Обычная форма
      req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      let formData = new FormData(form);
      req.send(formData);

      // JSON файлы
      //req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      // Если ругается но ошибку кроссдоменных запросов (из-за 'application/json; charset=utf-8')
      //, то можно req.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8'); или убрать её
      let obj = {};
      formData.forEach((value, key) => {
        obj[key] = value;
      });
      let strJSON = JSON.stringify(obj);
      //req.send(strJSON);


      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
      }
    });
  });

  let maskPhone = "+7 (___) ___ __ __"; // Маска ввода
  document.querySelectorAll('input[type=tel]').forEach((tel)=>{
    initPhoneMask(tel, maskPhone);
  });

  function initPhoneMask(_element, _mask) {
    _element.addEventListener('input', process);
    _element.addEventListener('focus', process);
    _element.addEventListener('blur', process);

    function process(e) {
            
      let matrix = _mask; // Маска ввода
      let def = matrix.replace(/\D/g, ""),
        val = _element.value.replace(/\D/g, "");

      if (def.length >= val.length) {
        val = def;
      }
      let iNum = 0,
        cursorPos = 0,
        im = 0;
        _element.value = matrix.replace(/./g, function (a) {

        let numberPlace = /[_\d]/.test(a);
        let ch = "";
        if (numberPlace && iNum < val.length) {
          ch = val.charAt(iNum++);
          cursorPos = im + 1;
        } else {
          ch = a;
        }
        im++;
        return ch;
      });

      if (event.type != "blur") {
        setCursorPosition(cursorPos == 0 ? _element.value.length : cursorPos, _element);
      }
    }

    function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    }
  }



  // Popup___________________________
  let moreBtns = document.querySelectorAll(".more, .description-btn"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close");

  let currDescBtn;
  moreBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      overlay.style.display = "block";
      this.classList.add("more-splash");
      document.body.style.overflow = "hidden";
      currDescBtn = this;
    });
  });

  close.addEventListener("click", () => {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    if (currDescBtn != undefined) {
      currDescBtn.classList.remove("more-splash");
    }
  });

  // Timer___________________________
  let deadLine = "2019-06-09";

  function getTimeRemaining(endTime) {
    let t = Date.parse(endTime) - Date.now(),
      seconds = t <= 0 ? 0 : Math.floor((t / 1000) % 60),
      minutes = t <= 0 ? 0 : Math.floor((t / 1000 / 60) % 60),
      hours = t <= 0 ? 0 : Math.floor(t / 1000 / 60 / 60);

    return {
      "total": t,
      hours,
      minutes,
      seconds
    };
  }

  function setClock(id, endTime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds"),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {

      function fill2(val) {
        val = (val < 10 ? "0" : "") + val;
        return val;
      }

      let t = getTimeRemaining(endTime);
      hours.textContent = fill2(t.hours);
      minutes.textContent = fill2(t.minutes);
      seconds.textContent = fill2(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock("timer", deadLine);

  // Tabs____________________________
  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  switchTab(0);

  function switchTab(ind = 0) {

    if (ind < 0 || ind >= tab.length) {
      return;
    }

    let hide = (el) => {
      el.classList.add('hide');
      el.classList.remove('show');
    };

    let show = (el) => {
      el.classList.add('show');
      el.classList.remove('hide');
    };

    for (let i = 0; i < tabContent.length; i++) {
      i == ind ? show(tabContent[i]) : hide(tabContent[i]);
    }
  }

  info.addEventListener("click", (event) => {
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