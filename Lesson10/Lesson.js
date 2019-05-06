let name = "Ivan";
let age = 32;
let mail = 'example@mail.ru';

document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);


function makeArray() {
  var items = [];
  for (var i = 0; i < 10; i++) {
    var item = function () {
      console.log(i);
    };
    items.push(item);
  }
  return items;
}
var arr = makeArray();
arr[1]();
arr[4]();
arr[8]();

function makeArray2() {
  var items = [];
  for (let i = 0; i < 10; i++) {
    var item = function () {
      console.log(i);
    };
    items.push(item);
  }

  return items;
}
var arr2 = makeArray2();
arr2[1]();
arr2[4]();
arr2[8]();

let fun = () => {
  console.log(this);
};
fun();

let obj = {
  number: 5,
  sayNumber: function () {
    let say = () => {
      console.log(this);
    };
    say();
  }
};

obj.sayNumber();



let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let show = () => {
    console.log(this);
  };
  show();
});


function calcOrDouble(number, basis = 2) {
  // basis = basis || 2; // ES5
  console.log(number * basis);
}
calcOrDouble(3, 5);
calcOrDouble(6);


class Rectangle {
  constructor(height, width=20) {
    this.height = height;
    this.width = width;
  }
  calcArea() {
    return this.height * this.width;
  }
}
const square = new Rectangle(50);
console.log(square.calcArea());


// Spread
let video = ['youtube', 'vimeo', 'rutube'],
blogs=['word press', 'live journal', 'bloger'],
internet=[...video, ...blogs, 'vk', 'facebook']; 
console.log(internet);

function log(a,b,c){
  console.log(a);
  console.log(b);
  console.log(c);
}

let numbers = [2,5,7];
log(...numbers);