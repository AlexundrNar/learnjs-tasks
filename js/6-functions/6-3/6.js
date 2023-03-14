// У нас есть массив объектов, который нужно отсортировать:
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

const byField = field => (a, b) => a[field] > b[field] ? 1 : -1

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));