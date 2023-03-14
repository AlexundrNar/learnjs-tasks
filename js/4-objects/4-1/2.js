// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
let schedule = {};

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false