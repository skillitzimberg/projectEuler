function sumOfMultiplesOf3And5(input) {
  let finalSum = 0;
  for (let i = 0; i < input; i++) {
    if ( i % 3 === 0 || i % 5 === 0) {
      finalSum += i;
    }
  }
  return finalSum;
}

function sumOfEvenFibonacciNumbers(input) {
  let sumOfEvens = 0;
  let i = 0; 
  let k = 1;

  for ( let j = 0; j <= input; j++ ) {
    let m = i + k;
    if ( m % 2 === 0 ) {
      sumOfEvens += m;
    };
    i = k;
    k = m;
  };
  return sumOfEvens;
}

function listPrimeNumbers(input) {
  let primeNumbers = [];
  for ( let i = 0; i <= input; i++ ) {
    if ( i % i === 0 && i % 1 === 0 ) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}