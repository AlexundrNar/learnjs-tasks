// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
// Сначала у нас есть такой код:
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

// Rabbit.prototype = {};
// alert( rabbit.eats );      // true
// Rabbit.prototype.eats = false;
// alert( rabbit.eats );      // false
// delete rabbit.eats;
// alert( rabbit.eats );      // true
delete Rabbit.prototype.eats;
alert( rabbit.eats );         // undefined