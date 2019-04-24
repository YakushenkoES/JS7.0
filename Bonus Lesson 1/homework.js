let N = 100;
let ans = []; // Коллекция простых чисел
for (let i = 2; i <= N; i++) {

  let simple = true;
  for (let j = 0; j < ans.length; j++) { // Проверять на деление только простых чисел, меньших, чем проверяемое число 
    if (i % ans[j] == 0) {
      simple = false;
      break;
    }
  }

  if (simple) {
    ans.push(i);
    console.log(`${i} - делители этого числа 1 и ${i}`);
  }
}