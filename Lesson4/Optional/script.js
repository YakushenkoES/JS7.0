//
//// Check validation
//getFriendlyNumbers(null, "asdas");
//getFriendlyNumbers("1", "300");
//getFriendlyNumbers(300, 1);
//getFriendlyNumbers(1.5, 300.3);
//getFriendlyNumbers(1, 1);
//
//// Lesson task
//getFriendlyNumbers(1, 300);
//getFriendlyNumbers(1, 100);
//getFriendlyNumbers(284, 500);
//
//// 2 pairs of friendly numbers
//getFriendlyNumbers(1, 1211);


 console.log(" method 2.1");
 let d1 = new Date();
 getFriendlyNumbersFast(1, 500000);
 let d2 = new Date();

console.log(`${(d2-d1)/1000/60} минут`);



function getFriendlyNumbersFast(start, end) {
  // Check
  let valid = Number.isInteger(start) && Number.isInteger(end) && end > 0 && start > 0 && end >= start;
  if (!valid) {
    console.log(`[${start} ${end}]  Data is not valid`);
    return false;
  }

  // Calc all sums
  let sums = [];
  sums[end-start]= undefined;
  for (let i = start; i <= end; i++) {
    sums[i-start] = calcOwnMathDividerSumm(i);
  }

  // find pairs
  let ans = [];
  for (let i = start; i <= end; i++) {
    let sum1 = sums[i-start];
    for (let j = i + 1; j <= end; j++) {
      let sum2 = sums[j-start];
      if (i == sum2 && j == sum1) {
        ans.push([i, j]);
      }
    }
  }

  console.log(`${start}-${end} result; \n[${ans.join("]\n[")}]`);
  return ans;
}


function getFriendlyNumbers(start, end) {

  // Check
  let valid = Number.isInteger(start) && Number.isInteger(end) && end > 0 && start > 0 && end >= start;
  if (!valid) {
    console.log(`[${start} ${end}]  Data is not valid`);
    return false;
  }

  // Check number pairs
  let ans = [];
  for (let i = start; i <= end; i++) {
    let sum1 = calcOwnMathDividerSumm(i);
    for (let j = i + 1; j <= sum1; j++) {
      let sum2 = calcOwnMathDividerSumm(j);
      if (i == sum2 && j == sum1) {
        ans.push([i, j]);
      }
    }

  }

  console.log(`${start}-${end} result [${ans.join("] [")}]`);
  return ans;
}


function calcOwnMathDividerSumm(n) {
  let sum = 1;

  // Почему Math.ceil(n / 2)? Собственный делитель - целый делитель отличный от собственного числа
  // Поэтому не нужно искать дальше чем половина от исходного числа
  let N =  Math.ceil(n / 2);
  for (let i = 1; i < N; i++) {
    let div = i + 1;
    sum += n % div === 0 ? div : 0;
  }
  return sum;
}