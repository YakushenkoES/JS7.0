window.addEventListener("DOMContentLoaded", function () {

  // new RegExp("pattern", "flags")
  // /pattern/flags

  let ans = prompt("Введите ваше имя");

  let reg = /n/g;

  console.log(ans.search(reg)); // Ищет только 1 совпадение
  console.log(ans.match(reg));
  console.log(reg.test("ans"));
  // Flags
  // i не зависимо от регистра
  // g ищем все вхождения а не первый
  // n флаг многострочности


  // Классы (большие буквы инвертированные классы)
  // \d цифры (\D не число)
  // \w буквы (\W не буква)
  // \s пробелы (\S не пробел) |
  // \ экранирующий символ

  ans = prompt("Введите число");

  reg = /\d/g;
  console.log(ans.match(reg));

  //let pass = prompt("Введите пароль");
  //console.log(pass.replace(/./g, "*"));
  //
  //alert('12-34-54'.replace(/-/g,":"));



  let str = "My name is R2D2";
  console.log(str.match(/\w\d\w\d/i));
});