// Решение разобрал и дорабтал отсюда https://javascript.ru/forum/dom-window/63870-kak-sdelat-masku-telefona-v-input-c-7-___-bez-jquery.html

window.addEventListener('DOMContentLoaded', function () {
  let input = document.querySelector('input');

  // Делать обработку при изменении и наведении/потери фокуса
  input.addEventListener('input', process);
  input.addEventListener('focus', process);
  input.addEventListener('blur', process);

  function process(e) {

    let matrix = "+7-(___)-___-____"; // Маска ввода

    // Убрать все НЕ цифры из маски И из введенного значения
    let def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");

    console.log(`Маска${matrix}; def ${def}; val ${val}`);

    // Если ничего не ввел пользователь, то взять цифры из маски (если были)
    if (def.length >= val.length) {
      val = def;
    }

    // Нужно все введенные цифры вставить в маску по порядку там, где это возможно (на месте сивола '_')
    // Пройтись по ВСЕМ символам МАСКИ и перебрать все введенные цифры пользователем
    let iNum = 0,     // индекс введенных цифр
      cursorPos = 0,  // позиция кусора
      im = 0;         // индекс текущего символа маски 

    this.value = matrix.replace(/./g, function (a) {

      let numberPlace = /[_\d]/.test(a); // Является ли позиция в маске для ввода цифры?
      let ch = "";
      if (numberPlace && iNum < val.length) {
        // Если да и если есть введенные цифры то в результат вставить введенную цифру
        ch = val.charAt(iNum++);
        cursorPos = im + 1;
      } else {
        // Нет оставить сивол маски
        ch = a;
      }
      im++;
      return ch;
    });

    // Установить курсор на нужную позицию НО ТОЛЬКО НЕ ТОГДА когда фокус снимается
    if (event.type != "blur"){
      setCursorPosition(cursorPos == 0 ? this.value.length : cursorPos, this);
    }
  }

  function setCursorPosition(pos, elem) {
   // Справка https://learn.javascript.ru/range-textrange-selection
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


});