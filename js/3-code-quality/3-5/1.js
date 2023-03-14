// Что не так в нижеприведённом тесте функции pow? - здесь три теста в одном
it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);  // 1

  result *= x;
  assert.equal(pow(x, 2), result);  // 2

  result *= x;
  assert.equal(pow(x, 3), result);  // 3
});