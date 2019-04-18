'use strict';

let person = {
  name: 'Jhon',
  age: 25,
  Married: true
};


console.log(person.name);
console.log(person["age"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[0]);

//console.log("ss"+"xx");
//console.log("4"+5);
//console.log(5+"4");
//
//console.log(+"4"+5);
//console.log(5+ +"4");
//let ans = +prompt("Есть ли вам 18?", "Да");
//console.log((ans));
//console.log(typeof(ans));


let incr = 10,
    decr = 10;

   
    console.log(incr++);
    console.log(decr--);


    console.log("2"==2);
    console.log("2"===2);

    let isChecked = true;
    let isClosed = false;

    console.log(isChecked && isClosed);
    console.log(isChecked || isClosed);