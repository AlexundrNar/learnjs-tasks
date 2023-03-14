// // В ифрейме ниже располагается документ с зелёным «полем».
// // Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.
// Ваш код должен при помощи DOM получить четыре пары координат:

// верхний левый, внешний угол (это просто).
// нижний правый, внешний угол (тоже просто).
// верхний левый, внутренний угол (чуть сложнее).
// нижний правый, внутренний угол (есть несколько способов, выберите один).


let fieldCoords = field.getBoundingClientRect();

let answer = [
  [
    // 1
    fieldCoords.left,
    fieldCoords.top,
  ],
  [
    // 2
    fieldCoords.right,
    fieldCoords.bottom,
  ],
  [
    // 3
    fieldCoords.left + field.clientLeft,
    fieldCoords.top + field.clientTop,
  ],
  [
    // 4
    fieldCoords.left + field.clientLeft + field.clientWidth,
    fieldCoords.top + field.clientTop + field.clientHeight,
  ],
];

document.onclick = function(e) {
  coords.innerHTML = e.clientX + ':' + e.clientY;
};

alert(answer.join("  "));


