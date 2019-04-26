'use strict';

// log output formats
const frmtOK = "background-color:#99ffbb;";
const frmtErr = "color:#cc0000;";

// Main programm __________________________

// Controls
let btnStart = document.getElementById("start"),
    elValues = document.querySelectorAll(".result div[class$='-value'"),
    valueBudget
    inputsExpenses = document.getElementsByClassName("expenses-item"),
    buttons = document.getElementsByTagName("button"),
    btnConfirmExps = buttons[0],
    btnConfirmOptionalExps = buttons[1],
    btnCalc = buttons[2],
    inputsOptExp = document.querySelectorAll(".data input.optionalexpenses-item"),
    inputIncome = document.querySelector("#income"),
    inputSavings = document.querySelector("#savings"),
    inputIncomeSumm = document.querySelector("#sum"),
    inputIncomePC = document.querySelector("#percent"),

    inputYear = document.querySelector(".time-data .year .year-value"),
    inputMonth = document.querySelector(".time-data .month .month-value"),
    inputDay = document.querySelector(".time-data .day .day-value");




// Временно отключил код, чтобы окна пока не всплывали
if(false)
{
// Enter budget
let money, time;
start();

// Create object, add time and money
let appData = {
  "budget": money,
  "timeData": time,
  "expenses": {},
  "optionalExpenses": {},
  "income": [],
  "savings": true,
  chooseExpenses: function (qtyExpenses) {
    for (let i = 0; i < qtyExpenses; i++) {
      // Enter expense till correct
      let exp = askStringValue("Введите обязательную статью расходов в этом месяце", 50);

      // Enter money till correct
      let money = askNumTillCorr("Во сколько обойдется?");

      // Save data
      this.expenses[exp] = +money;
      logOk(`Data SAVED! expense: "${exp}"; money: "${money}"`);
    }
  },
  detectDayBudget: function () {
    this.moneyPerDay = +(this.budget / 30).toFixed();
    console.log("Бюджет на 1 день:" + this.moneyPerDay);
  },
  detectLevel: function () {
    if (this.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (this.moneyPerDay >= 100 && this.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (this.moneyPerDay >= 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function () {
    if (this.savings == true) {
      let save = askNumTillCorr("Какова сумма накоплений?");
      let percent = askNumTillCorr("Под какой процент?");

      this.monthIncome = save / 12 * percent / 100;
      alert(`Доход в месяц с вашего депозита: ${this.monthIncome}`);
    }
  },
  chooseOptExpenses: function(qtyOptExpenses) {
    for (let i = 0; i < qtyOptExpenses; i++) {
      let exp = askStringValue("Статья необязательных расходов?", 50);
      logOk(`Data SAVED! Optional expense: "${exp}"`);
      this.optionalExpenses[i + 1] = exp;
    }
  },

  chooseIncome: function(){
    // Get data
    let items = askStringValue("Что принесет дополнительных доход (перечислите через запятую)?");
    this.income = items.split(',');
    this.income.push(askStringValue("может что-то еще?"));

    // Remove white spaces in each element (in the start anв end)
    this.income.forEach((val, ind, inputArr) => {
      inputArr[ind] = val.trim();
    });

    // Remove empty elements
    // Лишняя проверка на пустую строку ( уже осуществляется при вызове askStringValue)
    // Но хотелось попрактиковаться с callback'ами и функцией filter
    this.income = this.income.filter(function(value){
      return value.length > 0;
    });

    this.income.sort();

    console.log("Способы доп. заработка: ");
    this.income.forEach((val, index)=>{
      console.log((index+1).toString()+". " + val);
    });
  }
};

// Enter expenses
let qtyExpenses = 2; // Quantity of expenses
appData.chooseExpenses(qtyExpenses);
appData.detectDayBudget(); // 1 day budget and level
appData.detectLevel();
appData.checkSavings(); // Check deposit savings
appData.chooseOptExpenses(3); // Optinal expenses
appData.chooseIncome(); 
console.log(appData);

console.log("Наша программа включает в себя данные: ");
for(let key in appData){
  console.log(key);
}


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

function askStringValue(_message, _maxLen ) {
  // Enter expense till correct
  let exp, isValid = false;
  do {
    exp = prompt(_message, "");
    if (typeof (exp) !== 'string') {
      logErr("Data is not valid!");
      continue;
    }

    exp = exp.trim();
    isValid = exp != '' && (typeof(_maxLen)==="undefined" ? true : exp.length < 50); // Check expense 
    if (!isValid) {
      logErr("Data is not valid!");
    }
  }
  while (!isValid);

  return exp;
}

function isNum(val) {
  return !isNaN(parseFloat(val)) && isFinite(val);
}

function logOk(_message) {
  console.log("%c" + _message, frmtOK);
}

function logErr(_message) {
  console.log("%c" + _message, frmtErr);
}
}
