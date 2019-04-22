// У вас есть str = “урок-3-был слишком легким” Сделать так, чтобы строка начиналась с большой буквы
let str = "урок-3-был слишком легким";
let ans = str[0].toLocaleUpperCase() + str.slice(1);
console.log(ans);

// Теперь замените все “-” на пробелы
ans = ans.replace(/-/g, " ");
console.log(ans);

//Из получившейся строки вырезать слово “легким”, в этом же слове заменить 2 последние буквы на букву “о”
let pattern = "легким";
let ans2 = str.substr(str.indexOf(pattern), pattern.length);
console.log(ans2);
ans2 = ans2.slice(0, -2) + "o".repeat(2);
console.log(ans2);

// У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]
// Вывести в консоль квадратный корень из суммы кубов его элементов (Да, человека нужно исключить)
let arr = [20, 33, 1, "Человек", 2, 3];
ans = 0;
for (let i = 0; i < arr.length; i++) {

  if (isNaN(arr[i])) {
    continue;
  }
  ans += arr[i] ** 3;
}
ans = Math.sqrt(ans);
console.log(ans);

//Создайте функцию, которая принимает 1 аргумент (название произвольное)
//·  Если как аргумент передана не строка - функция оповещает об этом пользователя
//·  В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
//·  Если строка более 50 знаков - то после 50го символа часть текста скрывается и вместо них появляются три точки (...) 

function f(_arg) {
  console.log("Input:");
  console.log(_arg);
  if (typeof (_arg) !== "string") {
    console.log("Argument is NOT string");
    return;
  }

  _arg = _arg.trim();
  if (_arg.length > 50) {
    _arg = _arg.substr(0, 50) + "...";
  }

  console.log("Result:");
  console.log(_arg);
}
// Test
f(2);
f("         Lorem ipsum dolor sit amet            ");
f("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique asperiores ut in veniam magni debitis animi earum porro con");
