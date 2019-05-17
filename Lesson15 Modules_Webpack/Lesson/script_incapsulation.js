// Инкапсуляция_______________________
// Инкапсуляция полей объекта
function User(name, age) {
  this.name = name;
  //this.age = age;
  let userAge = age;

  this.say = function () {
    console.log(`Имя пользователя ${this.name}; возраст ${userAge}`);
  };

  this.getAge = function () {
    return userAge;
  };

  this.setAge = function (age) {
    if (typeof age === 'number' && age > 0 && age < 120) {
      userAge = age;
    } else {
      console.log("недопустимое значение");
    }
  };
}

let ivan = new User('ivan', 25);
console.log('ivan :', ivan);
console.log('ivan.name :', ivan.name);
console.log('ivan.age :', ivan.userAge);
console.log('ivan.getAge() :', ivan.getAge());

//ivan.age = 30;
ivan.setAge(30);
console.log('ivan.getAge() :', ivan.getAge());
ivan.say();


// Создание модулей. 1. Анонимные самовызывающиеся функции ______________
let number = 1;
(function () {
  let number = 2;
  console.log(number);

  return console.log(number + 3);
}());
console.log(number);

// Создание модулей. 2. Использование объектного интерфейса __________________
let user = (function () {
  let private = function () {
    console.log("I'm private");
  }

  return {
    sayHello: function () {
      console.log('Hello');
    }
  };
}());
console.log('user :', user);
user.sayHello();

// Создание модулей. 3. Использование объектного интерфейса __________________
let user2 = (function () {
  let private = function () {
    console.log("I'm private");
  };
  let sayHello = function () {
    console.log('Hello');
  };

  return {
    private,
    sayHello
  };

}());
console.log('user2 :', user2);
user.sayHello();