let inputData = [2, 3, 2, 4, 5, 12, 2, 3, 3, 3, 12];
console.log("Input");
console.log(inputData);
console.log("Output");
console.log(freqSort(inputData));

function freqSort(arr) {
  let freqs = {};

  // Get qty's
  for (const a of arr) {
    if (freqs["" + a] == undefined) {
      freqs["" + a] = 1;
    } else {
      freqs["" + a]++;
    }
  }

  // Decrease sort by freq 
  let temp = [],
    ind = 0;
  for (const k in freqs) {
    temp[ind++] = [+k, freqs[k]];
  }
  temp.sort(function (a, b) {
    return b[1] - a[1];
  });

  // Prepare ans
  let ans = [];
  for (const val of temp) {
    ans = ans.concat(Array(val[1]).fill(val[0]));
  }
  
  return ans;
}