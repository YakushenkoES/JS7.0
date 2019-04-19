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

// Cycle using "while"
// let i = 0,;
// while(i < qtyExpenses ){
//   i++; 
//     ...
// }

// Cycle using "do while"
// let i = 0;
// do{
//   i++; 
//     ...
// }
// while(i < qtyExpenses );

let qtyExpenses = 2; // Quantity of expenses
for (let i = 0; i < qtyExpenses; i++) {

  // Enter data
  let exp = prompt("Введите обязательную статью расходов в этом месяце", "");
  let money = prompt("Во сколько обойдется?", "");

  // Is data valid?
  let isValid =
    typeof (exp) === 'string' && exp != '' && exp.length < 50 && // Check expense 
    !Number.isNaN(parseFloat(money)) && isFinite(money); // Check money 

  // Data is NOT valid
  if (!isValid) {
    console.log("Data is not valid!");
    i--; // Move to previous iteration
    continue;
  }

  // Data is valid
  appData.expenses[exp] = +money;
  console.log("Data SAVED!");
}
console.log(appData);
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