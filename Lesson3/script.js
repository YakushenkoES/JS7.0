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

let calc = (a, b) => a + b;
console.log(calc(34, 122));

function retVar() {
  let num = 50;
  return num;
}
console.log(retVar());


let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());


let twelve = "12.2px";
//console.log(Math.round(twelve));

console.log(parseInt(twelve));
console.log(parseFloat(twelve));