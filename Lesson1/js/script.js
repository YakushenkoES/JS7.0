'use strinct';

// Get user data
let money = prompt("Ваш бюджет за месяц?", "");
let sNow = new Date().toISOString().slice(0,10);
let time = prompt("Введите дату в формате YYYY-MM-DD",sNow);

// Create object, add time and money
let appData = {
  "money" : money,
  "timeData" : time,
  "expenses" : {},
  "optionalExpenses" : {},
  "income" : {},
  "savings" : {}
};

// Expenses
for (let i = 0; i < 2; i++)
{
  let expense = prompt("Введите обязательную статью расходов в этом месяце", "");
  let expMoney = prompt("Во сколько обойдется?", "");
  appData.expenses[expense] = expMoney;
}

// Check 'appData' object content
console.log("Проверка содержания построенного объекта123123");
console.log(appData);

// 1 day budget
console.log(`Бюджет на 1 день ${appData.money / 30}`);