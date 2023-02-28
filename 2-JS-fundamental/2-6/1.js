// страница, которая спрашивает имя у пользователя и затем выводит его
const promtUserName = prompt("Какое у тебя имя, поользователь?")
if (promtUserName === null || promtUserName === "") {
  alert("Похоже, у тебя нет имени")
} else {
  alert(promtUserName)
}