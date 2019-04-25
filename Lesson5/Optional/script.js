// Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
let dtNow = new Date();

let hour = fill2(dtNow.getHours()),
  mnts = fill2(dtNow.getMinutes()),
  scnds = fill2(dtNow.getSeconds());

let strDate = `${hour}:${mnts}:${scnds} ${dateToString(dtNow)}`;
console.log("Текущее время: " + strDate);
let el = document.getElementById("time");
el.textContent = "Текущее время: " + strDate;


// Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)
function fill2(val) {
  val = (val < 10 ? "0" : "") + val;
  return val;
}

// Функция, которая правильно выводит дату (без времени)
function dateToString(dt) {
  let year = "" + dt.getFullYear();
  year = "0".repeat(4 - year.length) + year;

  let month = fill2(dt.getMonth() + 1),
    day = fill2(dt.getDate());

  let ans = `${day}.${month}.${year}`;
  return ans;
}

// Функция, которая корректирует неправильную строку даты
function correctDateString(str) {
  let parts = str.split(".");
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].length < 2) {
      parts[i] = "0" + parts[i];
    }
  }
  let ans = parts.join(".");
  return ans;
}
let incorrStr = "1.6.2018";
console.log(`Корерктировка строки с датой. Было: "${incorrStr}". Стало: "${correctDateString(incorrStr)}".`);




// Напишите функцию, которая выводит на страницу текущий день недели на русском языке (реализацию выбираете сами)
let dayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let today = dayNames[dtNow.getDay()];
console.log("Текущий день недели: " + today);
el = document.getElementById("today");
el.textContent = "Текущий день недели: " + today;



// Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней
// Prepare inputs
let inputDt1 = document.getElementById("dt1"),
    inputDt2 = document.getElementById("dt2");

inputDt1.addEventListener("change", onChangeDate);
inputDt2.addEventListener("change", onChangeDate);

// Get date components
let year = "" + dtNow.getFullYear();
year = "0".repeat(4 - year.length) + year;
let month = fill2(dtNow.getMonth() + 1),
  day = fill2(dtNow.getDate());

strDate = `${year}-${month}-${day}T${hour}:${mnts}:${scnds}`; // Подготовить нужный формат данных
inputDt1.value = strDate; // Установить значения
inputDt2.value = strDate;
onChangeDate();

// Обработчик изменения дат
function onChangeDate() {
  let dt1 = new Date(Date.parse(inputDt1.value));
  let dt2 = new Date(Date.parse(inputDt2.value));
  console.log("Дата 1: " + dt1);
  console.log("Дата 1: " + dt2);

  let diff = dayDiff(dt1, dt2);
  let ans = isNaN(diff) ? ("Даты заданы некорректно (или вообще не заданы)") : ("Количество дней между датами: " + diff);
  console.log(ans);

  el = document.getElementById("dayDiffResult");
  el.textContent = ans;
}

// Найти разницу дат и выразить её в днях
function dayDiff(dt1, dt2) {
  return ((dt2 - dt1) / (1000 * 60 * 60 * 24)).toFixed(2);
}