// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
function getSecondsToTomorrow() {
  const today = new Date()
  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1)
  const diff = tomorrow - today

  return Math.round(diff / 1000)
}

console.log(getSecondsToTomorrow());