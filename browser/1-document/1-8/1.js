function showNotification(options) {
  let body = document.body;
  let div = document.createElement("div");

  div.classList.add('notification')

  for (const option of Object.entries(options)) {
    if (typeof option[1] === "number") {
      div.style[`${option[0]}`] = `${option[1]}px`;
    } else if (option[0] === "html") {
      div.textContent = option[1];
    } else if (option[0] === "className") {
      div.classList.add(option[1]);
    } else {
      div.style[`${option[0]}`] = option[1];
    }
  }

  body.append(div);

  setTimeout(() => div.remove(), 1500);
}

setInterval( () => {
  showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: "Hello!", // HTML-уведомление
    className: "welcome", // дополнительный класс для div (необязательно)
    backgroundColor: "green",
    color: "white",
    padding: 20,
    position: "absolute",
    fontSize: 20,
  });
}, 2000);