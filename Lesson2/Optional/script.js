'use strict';
// Day of weeks_________________________________
let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let todayIndex = new Date().getDay() - 1; // Day of week; -1 is convertion [sunday-saturday] to [monday - Sunday]
if (todayIndex < 0) {
  todayIndex = 6;
}

// Show days to display
let elAns = document.getElementById("answer");
for (let i = 0; i < week.length; i++) {

  // HTML document output_____________
  // create day element
  let elDay = document.createElement("p");
  let content = document.createTextNode(week[i]);
  elDay.appendChild(content);

  // Set styles (add classes)
  elDay.classList.add("day");
  let bWeekend = i >= 5;
  let bToday = i == todayIndex;
  if (bToday) {
    elDay.classList.add("today");
  }
  if (bWeekend) {
    elDay.classList.add("weekend");
  }

  // Add day element
  elAns.appendChild(elDay);


  // Console output______________
  // common format
  let format = "font-family: Arial, Helvetica, sans-serif; font-size: 18px; padding-left: 5px; ";

  // bold italic format
  if (bWeekend) {
    format += "font-weight: bold; ";
  }
  if (i == todayIndex) {
    format += "font-style: italic;  background-color: rgb(137, 240, 240); ";
  }

  // left border
  if (bWeekend) {
    format += " border-left: solid red 4px; ";
  } else {
    format += "border-left: solid gray 2px;";
  }

  // output
  console.log("%c"+week[i], format);

}

// Numbers______________________
console.log('Get numbers starts with 3 or 7');
let arr = [242423, 734423, 11231, 34772, 9999, 3499, 6543];
// String method
console.log('String method');
for (let i = 0; i < arr.length; i++) {
  let s = arr[i].toString();
  if (s.length > 0 && (s[0] == '3' || s[0] == '7')) {
    console.log(arr[i]);
  }
}

// Log10 method
console.log('Log10 method');
for (let i = 0; i < arr.length; i++) {
  let qtyDigits = Math.floor(Math.log10(arr[i]) + 1);
  let firstDigit = Math.floor(arr[i] / Math.pow(10, qtyDigits - 1));
  if (firstDigit == 3 || firstDigit == 7) {
    console.log(arr[i]);
  }
}