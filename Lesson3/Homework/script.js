'use strict';

// log output formats
const frmtOK = "background-color:#99ffbb;";
const frmtErr = "color:#cc0000;";


// Main programm __________________________

// Enter budget
let money, time;
start();

// Create object, add time and money
let appData = {
  "budget": money,
  "timeData": time,
  "expenses": {},
  "optionalExpenses": {},
  "income": {},
  "savings": true
};

// Enter expenses
let qtyExpenses = 2; // Quantity of expenses
chooseExpenses(qtyExpenses);

// 1 day budget
appData.moneyPerDay = +(appData.budget / 30).toFixed();
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

// Check deposit savings
checkSavings();
console.log(appData);


// functions ______________________________________________________

function start() {
  // Enter money
  money = askNumTillCorr("Ваш бюджет за месяц?");

  // Enter date
  let sNow = new Date().toISOString().slice(0, 10);
  time = prompt("Введите дату в формате YYYY-MM-DD", sNow);
  if (typeof (time === "string")) {
    time = time.trim();
  }

  logOk(`Data SAVED! money: "${money}"; time: "${time}"`);
}

function checkSavings() {
  if (appData.savings == true) {
    let save = askNumTillCorr("Какова сумма накоплений?");
    let percent = askNumTillCorr("Под какой процент?");

    appData.monthIncome = save/12*percent/100;
    alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
  }
}

function chooseExpenses(qtyExpenses) {
  for (let i = 0; i < qtyExpenses; i++) {

    // Enter expense till correct
    let exp, isValid;
    do {
      exp = prompt("Введите обязательную статью расходов в этом месяце", "");
      if (typeof (exp) === 'string') {
        exp = exp.trim();
      }
      isValid = typeof (exp) === 'string' && exp != '' && exp.length < 50; // Check expense 
      if (!isValid) {
        logErr("Data is not valid!");
      }
    }
    while (!isValid);

    // Enter money till correct
    let money = askNumTillCorr("Во сколько обойдется?");

    // Save data
    appData.expenses[exp] = +money;
    logOk(`Data SAVED! expense: "${exp}"; money: "${money}"`);
  }
}


function askNumTillCorr(_message) {
  // Спрашивать число, пока не введет корректное
  let val, valid;
  do {
    val = prompt(_message, "");
    valid = isNum(val);
    if (!valid) {
      logErr("Value is not valid!");
    }
  }
  while (!valid);
  return +val;
}

function isNum(val) {
  return !isNaN(parseFloat(val)) && isFinite(val);
}

function logOk(_message){
  console.log("%c"+_message, frmtOK);
}
function logErr(_message){
  console.log("%c"+_message, frmtErr);
}