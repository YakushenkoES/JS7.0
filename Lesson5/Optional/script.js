// Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
let dt = new Date();
let year = "" + dt.getFullYear();
year = "0".repeat(4 - year.length) + year;

let month = fill2(dt.getMonth() + 1),
  day = fill2(dt.getDate()),
  hour = fill2(dt.getHours()),
  mnts = fill2(dt.getMinutes()),
  scnds = fill2(dt.getSeconds());

let strDate = `${hour}:${mnts}:${scnds} ${day}.${month}.${year}`;
console.log("Текущее время: " + strDate);
let el = document.getElementById("time");
el.textContent = "Текущее время: " + strDate;


// Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)
function fill2(val) {
  val = (val < 10 ? "0" : "") + val;
  return val;
}


// Напишите функцию, которая выводит на страницу текущий день недели на русском языке (реализацию выбираете сами)
let dayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let today = dayNames[dt.getDay()];
console.log("Текущий день недели: " + today);
el = document.getElementById("today");
el.textContent = "Текущий день недели: " + today;



// Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней
// Prepare inputs
let inputDt1 = document.getElementById("dt1"),
  inputDt2 = document.getElementById("dt2");

inputDt1.addEventListener("change", onChangeDate);
inputDt2.addEventListener("change", onChangeDate);
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