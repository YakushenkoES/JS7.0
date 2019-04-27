function isSomeTrue(_arr, _callback) {
  console.log(_arr);
  let ind = 0;
  return check(_arr, _callback);

  // Рекурсивная функция перебора элементов
  function check(_arr, _callback) {
    if (ind < _arr.length) {
      if (isNumber(_arr[ind], _callback)) {
        console.log(`Элемент № ${ind} (значение: ${_arr[ind]}) НАЙДЕН фильтрующей функцией`);
        return true; // Функция должна найти хоть один элемент, который проходит фильтрующую функцию, дальше не надо проверять
      }
      ind++;
      return check(_arr, _callback);
    }
    console.log(`Ни один элемент не обнаружен фильтрующей функцией`);
    return false;
  }
}

let allNumbers = [1, 2, 4, 5, 6, 7, 8],
  someNumbers = [1, 2, 'Hello', 4, 5, 'world', 6, 7, 8],
  someNumbers2 = [null, undefined, {},
    [], 'Hello', 4, 5, 'world', 6, 7, 8
  ],
  noNumbers = ['здесь', 'нет', 'чисел'];

function isNumber(val) {
  return typeof val === 'number';
}

console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers2, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false