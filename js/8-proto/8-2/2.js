// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.
// Можем ли мы сделать так?

// let obj2 = new obj.constructor(); - можем

function User(name) {
  this.name = name;
}

// User.prototype = {}; // (*)  // неправильно

let user = new User('John');
let user2 = new user.constructor('Pete');

console.log(( user2.name )); // работает