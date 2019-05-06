class User2 {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
  }
  hello() {
    console.log(`Hello ${this.name}`);
  }
  exit() {
    console.log(`Пользователь ${this.name} ушел`);
  }
}

let ivan2 = new User2('Ivan', 25);
let alex2 = new User2('Alex', 20);

console.log(ivan2);
console.log(alex2);

ivan2.exit();