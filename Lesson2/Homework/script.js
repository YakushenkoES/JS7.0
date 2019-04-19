'use strict';

// Get user data
let money = +prompt("Ваш бюджет за месяц?", "");
let sNow = new Date().toISOString().slice(0, 10);
let time = prompt("Введите дату в формате YYYY-MM-DD", sNow);

// Create object, add time and money
let appData = {
  "budget": money,
  "timeData": time,
  "expenses": {},
  "optionalExpenses": {},
  "income": {},
  "savings": false
};

// Expenses
let qtyExpenses = 2; // Quantity of expenses
let attemptsMaxQty = 5; // No more 5 attempts! To avoid infinite input cycle (if user constantly inputs wrong data)

// Cycle using "while"
// let i = 0, attempt = 0;
// while(i < qtyExpenses && attempt < attemptsMaxQty){
//   i++; attempt++;
//     ...
// }

// Cycle using "do while"
// let i = 0, attempt = 0;
// do{
//   i++; attempt++;
//     ...
// }
// while(i < qtyExpenses && attempt < attemptsMaxQty);

for (let i = 0, attempt = 0; i < qtyExpenses && attempt < attemptsMaxQty; i++, attempt++) {

  // Enter data
  let exp = prompt("Введите обязательную статью расходов в этом месяце", "");
  let money = prompt("Во сколько обойдется?", "");

  // Is data valid?
  let isValid =
    typeof (exp) === 'string' && typeof (exp) !== null && exp != '' && exp.length < 50 && // Check expense 
    typeof (money) === 'string' && typeof (money) !== null && money != ''; // Check money 

  // Data is NOT valid
  if (!isValid) {
    console.log("Data is not valid!");
    i--; // Move to previous iteration
    continue;
  }

  // Data is valid
  appData.expenses[exp] = money;
  console.log("Data SAVED!");
}

// 1 day budget
appData.moneyPerDay = appData.budget / 30;
console.log("Бюджет на 1 день:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}