// Каков результат? Почему?
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // вызов функции arr[2](), которая указывает на этот же массив и выводит: a, b, function() {alert( this )}
