'use strict';

// log output formats
const frmtOK = "background-color:#99ffbb;";
const frmtErr = "color:#cc0000;";

// Main programm __________________________

let buttons = document.getElementsByTagName("button");

// Controls
let values = {
  budjet: document.querySelector(".result .budget-value"),
  dayBudget: document.querySelector(".result .daybudget-value"),
  level: document.querySelector(".result .level-value"),
  expenses: document.querySelector(".result .expenses-value"),
  optExpenses: document.querySelector(".result .optionalexpenses-value"),
  income: document.querySelector(".result .income-value"),
  monthSavings: document.querySelector(".result .monthsavings-value"),
  yearSavings: document.querySelector(".result .yearsavings-value")
};

let btns = {
  start: document.getElementById("start"),
  confirmExps: buttons[0],
  confirmOptionalExps: buttons[1],
  calcDayBudget: buttons[2],
};

let inputs = {
  expenses: document.getElementsByClassName("expenses-item"),
  optExpenses: document.querySelectorAll(".data input.optionalexpenses-item"),
  income: document.querySelector("#income"),
  checkSavings: document.querySelector("#savings"),
  savingsSumm: document.querySelector("#sum"),
  savingsPC: document.querySelector("#percent"),

  year: document.querySelector(".time-data .year .year-value"),
  month: document.querySelector(".time-data .month .month-value"),
  day: document.querySelector(".time-data .day .day-value")
};


// Start_______________
btns.start.addEventListener("click", function () {

  let dt = askDate(); // Enter date
  let money = askNum("Ваш бюджет за месяц?"); // Enter money

  // Save
  appData.budget = money;
  appData.time = dt;
  values.budjet.textContent = appData.budget.toFixed();
  inputs.year.value = dt.getFullYear();
  inputs.month.value = dt.getMonth() + 1;
  inputs.day.value = dt.getDate();
  logOk(`Data SAVED! money: "${money}"; time: "${dt}"`);
});

// Expenses______________
btns.confirmExps.addEventListener("click", function () {
  let sum = 0;
  let qtyExpenses = Math.floor(inputs.expenses.length / 2);
  for (let i = 0; i < qtyExpenses; i++) {

    let exp = inputs.expenses[0 + i * 2].value; // Title
    let money = +inputs.expenses[1 + i * 2].value; // Value
    sum += money;
    appData.expenses[exp] = money; // Save data
  }
  values.expenses.textContent = sum;
});

// Optional expenceses________
btns.confirmOptionalExps.addEventListener("click", function () {
  let qtyOpt = inputs.optExpenses.length;

  let output = "";
  for (let i = 0; i < qtyOpt; i++) {
    let exp = inputs.optExpenses[i].value;
    appData.optionalExpenses["" + (i + 1)] = exp;
    output += exp + (i == qtyOpt - 1 ? "" : " ");

  }
  values.optExpenses.textContent = output;
});

// Day budget__________
btns.calcDayBudget.addEventListener("click", function () {

  // Reset fields if data is incorrect
  if (appData.budget == undefined) {
    values.dayBudget.textContent = "Произошла ошибка";
    // values.level.textContent = "-";
    return;
  }

  appData.moneyPerDay = +(appData.budget / 30).toFixed();
  let level = "";
  if (appData.moneyPerDay < 100) {
    level = "Минимальный уровень достатка";
  } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    level = "Средний уровень достатка";
  } else if (appData.moneyPerDay >= 2000) {
    level = "Высокий уровень достатка";
  } else {
    level = "Произошла ошибка";
  }

  appData.level = level;
  values.dayBudget.textContent = appData.moneyPerDay;
  values.level.textContent = level;
});

// Income____________
inputs.income.addEventListener("input", function () {

  let str = inputs.income.value;
  let incomes = str.split(',');

  // Remove white spaces in each element (in the start anв end)
  incomes.forEach((val, ind, inputArr) => {
    incomes[ind] = val.trim();
  });
  // Remove empty elements
  incomes = incomes.filter(function (value) {
    return value.length > 0;
  });

  appData.income = incomes;
  values.income.textContent = incomes.join(", ");
});

// Savings_______
inputs.checkSavings.addEventListener("click", function () {
  appData.savings = !appData.savings;
  if (!appData.savings) {
    values.monthSavings.textContent = "";
    values.yearSavings.textContent = "";
  } else {
    calcSavings();
  }
});

inputs.savingsSumm.addEventListener('input', function () {
  if (appData.savings) {
    calcSavings();
  }
});

inputs.savingsPC.addEventListener('input', function () {
  if (appData.savings) {
    calcSavings();
  }
});

function calcSavings() {
  let sum = inputs.savingsSumm.value;
  let percent = inputs.savingsPC.value;
  if (!isNum(sum) || !isNum(percent)) {
    let message = "Некорректные данные о накоплениях";
    values.monthSavings.textContent = message;
    values.yearSavings.textContent = message;
    return;
  }

  sum = (+sum);
  percent = (+percent);
  appData.monthIncome = sum / 12 * percent / 100;
  appData.yearIncome = sum * percent / 100;
  values.monthSavings.textContent = appData.monthIncome.toFixed(2);
  values.yearSavings.textContent = appData.yearIncome.toFixed(2);
}

// Create object, add time and money
let appData = {
  "expenses": {},
  "optionalExpenses": {},
  "income": [],
  "savings": false,
};

console.log(appData);


// functions ______________________________________________________



function askDate() {
  // Enter date
  let sNow = new Date().toISOString().slice(0, 10),
    valid = false,
    ans;

  do {
    let time = prompt("Введите дату в формате YYYY-MM-DD", sNow);
    if (typeof (time) === 'string') {

      time = time.trim();
      if (typeof (time) === "string" && time.length == 10) {
        let dt = Date.parse(time);
        console.log(time);
        console.log(dt);
        if (!isNaN(dt)) {
          valid = true;
          ans = new Date(dt);
        }
      }
    }
    if (!valid) {
      logErr("Data is not valid!");
    }
  }
  while (!valid);

  return ans;
}

function askNum(_message) {
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

function askString(_message, _maxLen) {
  // Enter expense till correct
  let exp, isValid = false;
  do {
    exp = prompt(_message, "");
    if (typeof (exp) !== 'string') {
      logErr("Data is not valid!");
      continue;
    }

    exp = exp.trim();
    isValid = exp != '' && (typeof (_maxLen) === "undefined" ? true : exp.length < 50); // Check expense 
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