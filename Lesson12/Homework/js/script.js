window.addEventListener('DOMContentLoaded', () => {

  'use strict';

  // Form ___________________________

  // Функция создания элемента со статусом запроса
  function createReqStatusEl(form) {
    let div = document.createElement('div');
    let text = document.createElement('div');
    let img = document.createElement('div');
    div.classList.add('requestStatus');
    text.classList.add('status', 'requestStatus-status');
    img.classList.add('requestStatus-img');
    div.appendChild(img);
    div.appendChild(text);
    form.appendChild(div);
    return div;
  }

  // Извлечь формы с запросом
  let forms = document.querySelectorAll("form.main-form, form#form");

  // Для каждой формы...
  forms.forEach((form) => {

    let statusMessage = createReqStatusEl(form); // Создать элемент статуса запроса

    // Обработать событие отправки формы
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Отключение событий по умолчанию для ajax запроса
     
      // Функция создатель промиса ожидания начала ЗАГРУЗКИ
      function waitLoading(_xhr) {
        return new Promise(function (resolve, reject) {
          // Ожидать начала загрузки (или ошибки)
          _xhr.addEventListener('readystatechange', function onWaitLoading() {

            if (_xhr.readyState < 4) { // Loading
              _xhr.removeEventListener('readystatechange', onWaitLoading); // Отписать ЭТОТ обработчик события, он больше не нужен
              resolve(_xhr);
            } else if (_xhr.readyState === 4 && _xhr.status !== 200) { // Error
              reject();
            }
          });
        });
      }

      // Функция создатель промиса ожидания успешного получения ОТВЕТА на запрос
      function waitDone(_xhr) {
        return new Promise(function (resolve, reject) {

          // Ожидать успешного окончания запроса (или ошибки)
          _xhr.addEventListener('readystatechange', function onWaitDone() {
            if (_xhr.readyState === 4) { // Done ждать ТОЛЬКО readyState 4
              if (_xhr.status === 200) { // Done OK
                _xhr.removeEventListener('readystatechange', onWaitDone); // Отписать ЭТОТ обработчик события, он больше не нужен
                resolve(_xhr);
              } else { // Done Error
                reject();
              }
            }
          });

        });
      }

      // Функция послания запроса (возвращает промис ожидания начала загрузки)
      function sendRequest(_data) {
        let xhr = new XMLHttpRequest();
        let prom = waitLoading(xhr);    // Создание промиса ожидания начала загрузки
        // Послать запрос
        //xhr.open('POST', 'http://yoga.local/server.php'); // Для openserver в другом домене и кросс-доменными запросами
        xhr.open('POST', 'server.php'); // Для случая, когда и страница и php в одном домене
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(_data);

        return prom;
      }

      // Запуск цепочки промисов ajax запроса:
      let message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
      };

      sendRequest(new FormData(form)) // Создание промиса ожидания начала загрузки
        .then((_xhr) => { // Загрузка ответа на запрос пошла
          console.log("Loading");
          statusMessage.querySelector('.status').textContent = message.loading;
          statusMessage.querySelector('.requestStatus-img').style.backgroundImage = "url('icons/loader.gif')";
          return waitDone(_xhr); // Создать и вернуть промис ожидания окончания запроса
        })
        .then((_xhr) => { // Загрузка завершена
          console.log("OK");
          statusMessage.querySelector('.status').textContent = message.success;
          statusMessage.querySelector('.requestStatus-img').style.backgroundImage = "url('icons/ok.svg')";
        })
        .catch(() => { // Если что-то на каком-то этапе пошло не так
          console.log("Error");
          statusMessage.querySelector('.status').textContent = message.failure;
          statusMessage.querySelector('.requestStatus-img').style.backgroundImage = "url('icons/error.svg')";
        })
        .then(() => { // Finally действия после всего
          clearInputs(form);
        });

    });

    function clearInputs(_form) {
      let inputs = _form.getElementsByTagName('input');
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
      }
    }

  });



  let maskPhone = "+7 (___) ___ __ __"; // Маска ввода
  document.querySelectorAll('input[type=tel]').forEach((tel) => {
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