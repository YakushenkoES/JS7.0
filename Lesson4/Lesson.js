'use strict'
let options = {
  width: 1024,
  height: 1024,
  name: "text"
};

console.log(options.name);
options.bool = false;
options.colors = {
  border: "black",
  backgroud: "red"
};

console.log(options);

delete options.bool;

console.log(options);


for (let key in options) {
  console.log("Свойство " + key + " имеет значение " + options[key]);
}

console.log(Object.keys(options).length);

let arr = [1, "second", "third", 4, 5];
arr[99] = 99;

arr.pop(); // удаление с конца
arr.push("5"); // добавление в конец
arr.shift();
arr.unshift("1");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log(arr);
console.log(arr.length);


arr.forEach(function (item, i, inputArr) {
  console.log(i + ": " + item + " (массив: " + inputArr + ")");
});

let mass = [1, 3, 4, 5, 7];

for (let key in mass) {
  console.log(key);
}

for (let val of mass) {
  console.log(val);
}


//let ans = prompt("", "");
//
//arr = ans.split(",");
//console.log(arr);


arr = ["assfdsrferb", "wefd", "sdss", "123432"];
let s = arr.join('    ');
console.log(s);


s = arr.sort();
console.log(s);

function compareNum(x, y) {
  return x - y;
}

arr = [1, 15, 4];
s = arr.sort();
console.log(s);
s = arr.sort(compareNum);
console.log(s);



let soldier = {
  health: 400,
  armor: 125
};

let john = {
  health: 100,
};
console.log(john);
john.__proto__ = soldier;
console.log(john);
console.log(john.armor);