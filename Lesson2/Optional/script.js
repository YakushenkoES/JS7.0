// Day of weeks_________________________________
let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
<<<<<<< HEAD
let todayIndex = new Date().getDay() - 1; // Day of week; -1 is convertion [sunday-saturday] to [monday - Sunday]
=======
let todayIndex = new Date().getDay() - 0; // Day of week; -1 is convertion [sunday-saturday] to [monday - Sunday]
>>>>>>> bad026231a6353b67bcab13aff434ad5b4c03252

// Show days to display
let elAns = document.getElementById("answer");
for (let i = 0; i < week.length; i++) {
  // create day element
  let elDay = document.createElement("p");
  let content = document.createTextNode(week[i]);
  elDay.appendChild(content);

  // Set styles (add classes)
  elDay.classList.add("day");
  if (i == todayIndex) {
    elDay.classList.add("today");
  }
  if (i >= 5) {
    elDay.classList.add("weekend");
  }

  // Add day elemnt
  elAns.appendChild(elDay);
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
  if (firstDigit== 3 || firstDigit == 7) {
    console.log(arr[i]);
  }
}