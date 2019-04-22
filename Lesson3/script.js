// function showFirstMessagetext(text){
//   alert(text);
//   //let num = 10;
//   console.log(num);
// }

// let num = 20;
// showFirstMessagetext("My test text");
// console.log(num);

// let calc = function (a, b){
//   return (a + b);
//};

// let calc = (a, b) => a + b;
// console.log(calc(34, 122));

// function retVar() {
//   let num = 50;
//   return num;
// }
// console.log(retVar());


// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());


// let twelve = "12.2px";
// //console.log(Math.round(twelve));

// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

function first() {
  setTimeout(function () {
    console.log(1);
  }, 500);
}


function second() {
  console.log(2);
}

first();
second();

function learnJS(_lang, _callback) {
  console.log("I learn JS");
  _callback();
}
function done(){
  console.log("Я прошел 3 урок");
}

learnJS("java script", done);