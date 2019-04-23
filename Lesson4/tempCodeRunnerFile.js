
let soldier = {
  health: 400,
  armor: 100
};

let john = {
  health: 100,
};
console.log(john);
john.__ptoto__ = soldier;
console.log(john);
console.log(john.armor);