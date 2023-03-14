// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

const shuffle = array => array.sort(() => Math.random() - 0.5)

let arr = [1, 2, 3];

console.log(shuffle(arr));

console.log(shuffle(arr));

console.log(shuffle(arr));