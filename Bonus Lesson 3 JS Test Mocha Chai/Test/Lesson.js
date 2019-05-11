function sayName(name){
  let msg = `My name is ${name}`;
  return msg;
}
let arr = [5,3, -7, 3,4];
let res = arr.reduce(function(sum, elem){
  return sum+ elem;
})

let assert = require('chai').assert;

describe("sayName", function(){ // Блок
  it("Получаем фразу с новым именем", function(){ // Задача
    assert.typeOf(sayName("Ivan"), 'string');
  });
});

describe("arr", function(){ // Блок
  it("Получаем сумму чисел массива", function(){ // Задача
    assert.equal(res, 8);
  });
});