window.addEventListener('DOMContentLoaded', function () {
  let blocks, country, arrow;

  // Set event handlers
  Init();
  let inputs = document.querySelectorAll('.popup__call-phone input');
  inputs.forEach(inp => {
    initPhoneMask(inp, inp.placeholder);
  });


  function Init() {
    blocks = document.querySelectorAll('.popup__call-phone');

    country = blocks[0].querySelector(".popup__call-wrap");
    arrow = blocks[0].querySelector('.popup__call-svg');

    // Reset event handlers
    blocks.forEach(bl => {
      bl.removeEventListener('click', onBottomBlockClick);
      bl.querySelector(".popup__call-wrap").removeEventListener('click', onCountryClick);

    });

    // Set event handlers
    country.addEventListener('click', onCountryClick);
    blocks[1].addEventListener('click', onBottomBlockClick);
  }

  function onCountryClick() {
    toggleVisibility(blocks[1]);
    arrow.classList.toggle("popup__call-svg-active");
  }

  function onBottomBlockClick() {
    blocks[0].parentNode.insertBefore(blocks[1], blocks[0]);
    blocks = document.querySelectorAll('.popup__call-phone');
    toggleVisibility(blocks[1]);
    blocks.forEach(bl => {
      bl.classList.toggle('popup__call-phone-hidden');
    });
    
    Init();
  }

  function toggleVisibility(el) {
    let vis = el.style.visibility;
    el.style.visibility = vis === "" ? "hidden" : "";
  }

  function initPhoneMask(_element, _mask) {
    _element.addEventListener('input', process);
    _element.addEventListener('focus', process);
    _element.addEventListener('blur', process);

    function process(e) {

      let matrix = _mask; // Маска ввода
      let def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");

      if (def.length >= val.length) {
        val = def;
      }
      let iNum = 0,
        cursorPos = 0,
        im = 0;
      this.value = matrix.replace(/./g, function (a) {

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
        setCursorPosition(cursorPos == 0 ? this.value.length : cursorPos, this);
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

});