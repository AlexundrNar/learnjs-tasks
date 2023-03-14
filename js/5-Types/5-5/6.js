// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function(str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();
alert(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result1 = powerCalc.calculate("2 * 3");
let result2 = powerCalc.calculate("10 / 2");
let result3 = powerCalc.calculate("2 ** 3");
alert(result1); // 6
alert(result2); // 5
alert(result3); // 8
