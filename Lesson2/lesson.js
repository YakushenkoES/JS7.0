let num = 50;

if (num < 49) {
  console.log("Неверно мало");
} else if (num > 100) {
  console.log("Неверно много");
} else {
  console.log("Верно");
}

(num == 50) ? console.log("Верно"): console.log("НЕВерно");

switch (num) {
  case num < 49:
    console.log("Неверно мало");
    break;
  case num > 100:
    console.log("Неверно много");
    break;
  case num > 80:
    console.log("Все еще много");
    break;
  case 50:
    console.log("Верно");
    break;
  default:
    console.log("Что-то пошло не так");
    break;
}


while (num < 55) {
  console.log(num);
  num++;
}

num = 50;
do {
  console.log(num);
  num++;
}
while (num < 55);


for (let i = 1; i < 8; i++) {

  if (i == 3) {
    continue;
  }

  if (i == 6) {
    break;
  }
  console.log(i);
}