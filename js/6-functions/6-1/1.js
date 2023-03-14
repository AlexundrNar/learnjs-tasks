// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Сделайте три варианта решения:
// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
const sumTo = n => {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum
}

console.log(sumTo(4));

const sumTo1 = n => n === 1 ? 1 : n + sumTo1(n - 1)

console.log(sumTo1(5));

function sumTo2(n) {
  return n * (n + 1) / 2;
}

console.log(sumTo2(6));

// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему? - 3 вариант, рекурсия, ибо много итераций

console.log(sumTo(100000));
console.log(sumTo2(100000));
console.log(sumTo1(100000));