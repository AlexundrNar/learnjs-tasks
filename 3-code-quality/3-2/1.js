// Какие недостатки вы видите в стиле написания кода этого примера?
function pow(x,n)       // пробел в аргументах
{                       // фигурная скобка не с новой строки
  let result=1;         // пробел, где =
  for(let i=0;i<n;i++) {result*=x;}     // пробелы, квадратные скобки
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')     // опять пробелы, объявление переменных на разных строках
if (n<=0)                                    // и снова пробелы
{                 // скобка не с новой строки
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else                // элс должен быть выше
{                   // и скобка там, где элс
  alert(pow(x,n))   // ...пробелы, мать их))
}