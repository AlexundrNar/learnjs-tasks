// Проверка логина и пароля
const promtLogin = prompt("Введите логин")

if (promtLogin === "Админ") {
  const prompPass = prompt("Введите пароль")

  if (prompPass === "Я главный") {
    alert("Здравствуйте!")
  } else if (prompPass === null) {
    alert("Отменено")
  } else {alert("Неверный пароль")}
  
} else if (promtLogin === "" || promtLogin === null) {
  alert("Отменено")
} else {alert("Я вас не знаю")}