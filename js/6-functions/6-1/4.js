// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без? - без
function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

printList(list);

function printList2(list) {
  console.log(list.value);

  if (list.next) {
    printList2(list.next);
  }
}

printList2(list);