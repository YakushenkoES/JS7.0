// Получение контекста
// 1) Просто вызов функции - this = window/undefined
// 2) Методы объектов - this= сам объект
// 3) Конструктор (new) - this = новй созданный объект
// 4) Указане конекретного контекста - call, apply, bind
// 5) Контекст DOM


// 1) Просто вызов функции - this = window/undefined
// "use strict";
function showThis(a, b) {
  console.log(this);

  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}
showThis(1, 3);
showThis(5, 6);


// 2) Методы объектов - this= сам объект
let obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);

    function shout() {
      console.log(this);
    }
    shout();
  }
};

obj.sum();



// 3) Конструктор (new) - this = новй созданный объект
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log("Hello " + this.name);
  };
}

User.prototype.exit = function () {
  console.log("Пользователь " + this.name + " ушел");
};

let ivan = new User('Ivan', 25),
  alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.exit();



// 4) Указане конекретного контекста - call, apply, bind
let user = {
  name: "John"
};

function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}

console.log(sayName.call(user, 'aaaa'));
console.log(sayName.apply(user, ['aaaa']));


function count(number) {
  return this * number;
}

let double = count.bind(2);

console.log(double(4));


// 5) Контекст DOM
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log(this);

  this.style.backgroundColor = "red";

  function shoutThis() {
    console.log(this);
  }
  shoutThis();
});