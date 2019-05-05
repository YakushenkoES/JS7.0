console.log(func("ACGTGGTCTTAA"));
function func(dnk) {
  let rnk = "";
  for (let i = 0; i < dnk.length; i++) {
    //  G -> C, C -> G, T -> A, A -> U
    let s = "";
    switch (dnk[i]) {
      case "G":
        s = "C";
        break;
      case "C":
        s = "G";
        break;
      case "T":
        s = "A";
        break;
      case "A":
        s = "U";
        break;

      default:
        s = "";
        break;
    }
    rnk+=s;
  }
  return rnk;
}