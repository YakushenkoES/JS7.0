// callback HELL
let func1 = function (param, func2) {

  func2(function (param, func3) {
    func3(function (param, func4) {
      func4(function (param, func5) {
        func5();
      });
    });
  });

};


let drink = 1;

function shoot(arrow, headshot, fail) {
  console.log('Вы сделали выстрел...');
  setTimeout(function () {
    Math.random() > 0.5 ? headshot({}) : fail("Вы промахнулись");
  }, 1000);
}

function win(param, beer, money) {
  console.log('Вы победили!');
  (drink == 1) ? beer(): money();
}

function buyBeer() {
  console.log('Вам купили пиво');
}

function giveMoney() {
  console.log('Вам дали денег');
}


function loose() {
  console.log('Вы проиграли');
}

shoot({},
  function (mark) {
    console.log('Вы попали в цель!');
    win(mark, buyBeer, giveMoney);
  },
  function (miss) {
    console.log(miss);
    loose();
  }
);


// Перписывание с promise

