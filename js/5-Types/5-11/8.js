// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
  let diff = new Date() - date;
  let below10 = (n) => ((n < 10) ? '0' + n : n);
  let day = below10(date.getDate());
  let month = below10(date.getMonth()+1);
  let year = '' + date.getFullYear();
  let hour = below10(date.getHours());
  let min = below10(date.getMinutes());

  if (diff < 1000) {
      return "прямо сейчас";
  } else if (diff < 1000*60) {
      return `${diff/1000} сек. назад`;
  } else if (diff < 1000*60*60) {
      return `${diff/(1000*60)} мин. назад`;
  } else {
      return `${day}.${month}.${year.slice(-2)}, ${hour}:${min}`;
  }
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );