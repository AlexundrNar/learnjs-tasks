// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
let x = prompt("Введите x");
let n

do {
  n = prompt("Введите положительно число n");
} while (n < 1);

const pow = (x, n) => x ** n

alert( pow(x, n) );

