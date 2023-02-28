// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

const random = (min, max) => min + Math.random() * (max - min)

alert( random(1, 5) ); 
alert( random(1, 5) ); 
alert( random(1, 5) ); 