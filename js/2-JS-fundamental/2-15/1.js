// Обязателен ли "else"? - нет, можно убрать
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

checkAge(15)
