var script = require('../script');

describe("Функция sum", function () {
  it('Сумма чисел 2 и 2 НЕ больше 10.', function () {
    expect(script.sum(2, 2)).toBeFalsy();
  });
  it('Сумма чисел 5 и 5 НЕ больше 10.', function () {
    expect(script.sum(5, 5)).toBeFalsy();
  });
  it('Сумма чисел 5 и 6 больше 10.', function () {
    expect(script.sum(5, 6)).toBeTruthy();
  });
});

describe("Переменная num", function () {
  it('Переменная num должна быть равна 5', function () {
    expect(script.num).toBe(5);
  });
});

describe("Функция each", function () {

  let input = [64, 49, 36, 25, 16];
  let exp = [8, 7, 6, 5, 4];

  let res = script.each(input, script.myFunc);

  it('Проверка на возвращаемый тип "массив"', function () {
    expect(typeof res).toBe('array');
  });


  it('Проверка длины массива', function () {
    expect(res.length).toBe(exp.length);
  });

  it('Проверка на равенство массивов', function () {
    let allEq = true;
    for (let i = 0; i < res.length; i++) {
      if (res[i] != exp[i]) {
        allEq = false;
        break;
      }
    }
    expect(allEq).toBeTruthy();
  });
});