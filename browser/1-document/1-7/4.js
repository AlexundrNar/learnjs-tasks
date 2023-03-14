let ul = document.createElement("ul");
document.body.append(ul);

while (true) {
  let list = prompt("Введите текст для элемента списка");

  if (!list) break

  let li = document.createElement("li");
  li.textContent = list;
  ul.append(li);
}
