'use strict';

let num = 33721;
console.log(`Number is ${num}`);

// Calc digits prodict________
let digitsQty = 0; // Digits qty
let prod = 1; // Digits product
// Принцип: для получения значения цифр числа используется остаток деления на 10.
// На каждой итерации вычисляется остаток деления, равный единицам числа, 
// и само число делится на 10. Т.о. каждая цифра окажется на позиции единиц и будет вычислена.
let temp = num;
while(temp >= 1)
{
  digitsQty++;
    
  let rem = temp % 10;
  prod *= rem;
  temp=(temp-rem)/10;
}
console.log(`Digits quantity is ${digitsQty}`);
console.log(`Digits product is ${prod}`);

// Pow 3 without Math.pow____________
let pow = prod ** 3;
console.log(`Pow 3 is ${pow}`);

// Show last 2 digits____________
let lastDigitsQty = 2; // Quantity of last digits
temp = pow;
while(temp >= 10 ** lastDigitsQty)
{
  let rem = temp % 10;
  temp=(temp-rem)/10;
}
let digitsLast2 = temp;
console.log(`First ${lastDigitsQty} digits of ${pow} is ${digitsLast2}`);