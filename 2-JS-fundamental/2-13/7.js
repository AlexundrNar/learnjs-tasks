// Код, который выводит все простые числа из интервала от 2 до n.

function primeNumber (n) {
  nextPrime:
  for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime
    }

    console.log(i)
  }
}

primeNumber(20)