describe("Функция sum",function(){
	it('Сумма чисел 2 и 2 НЕ больше 10.', function () {
    assert.isFalse(sum(2, 2));
  });
  it('Сумма чисел 5 и 5 НЕ больше 10.', function () {
    assert.isFalse(sum(5, 5));
  });
  it('Сумма чисел 5 и 6 больше 10.', function () {
    assert.isTrue(sum(5, 6));
  });
});

describe("Переменная num",function(){
	it('Переменная num должна быть равна 5', function () {
    assert.equal(num, 5);
  });
});

describe("Функция each",function(){

  let input = [64, 49, 36, 25, 16];
  let expect = [8,7,6,5,4];

  let res = each(input, myFunc);

	it('Проверка на возвращаемый тип "массив"', function () {
    assert.isArray(res);
  });

  it('Проверка длины массива', function () {
    assert.lengthOf(res,expect.length);
  });

  it('Проверка на равенство массивов', function () {
    assert.deepEqual(res,expect);
  });
});