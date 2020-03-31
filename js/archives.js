function sumOfMultiplesOf3And5(input) {
  let finalSum = 0;
  for (let i = 0; i < input; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      finalSum += i;
    }
  }
  return finalSum;
}

function sumOfEvenFibonacciNumbers(input) {
  let sumOfEvens = 0;
  let i = 0;
  let k = 1;
  console.log('Fibonacci numbers:');
  for (let j = 0; j <= input; j++) {
    let m = i + k;
    if (m < 4000000 && m % 2 === 0) {
      sumOfEvens += m;
      console.log(m);
    }
    i = k;
    k = m;
  }
  console.log('Sum of even Fib numbers', sumOfEvens);
  return sumOfEvens;
}

function largestPrimeFactor(input) {
  let currentPrime;
  for (let i = 2; i < input; i++) {
    currentPrime = findtNthPrimeNumber(i);
    if (input / currentPrime === 1) return currentPrime;

    if (currentPrime < input && input % currentPrime === 0) {
      return largestPrimeFactor(input / currentPrime);
    }
  }
}

function listPrimeNumbers(input) {
  let primeNumbers = [];
  for (let i = 1; i <= input; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

function findtNthPrimeNumber(n) {
  let nthPrimeNumber;
  let countPrimeNumbers = 0;
  for (let i = 1; countPrimeNumbers < n; i++) {
    if (isPrime(i)) {
      countPrimeNumbers++;
      nthPrimeNumber = i;
    }
  }
  return nthPrimeNumber;
}

function isPrime(num) {
  if (num < 1) return false;
  if (num === 1) return true;

  for (let j = 2; j < num; j++) {
    if (j !== num && num % j === 0) {
      return false;
    }
  }

  return true;
}

function sumSquareDifference(n) {
  let sumOfSquares = 0;
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sumOfSquares += i ** 2;
    squareOfSums = (sum += i) ** 2;
  }
  return squareOfSums - sumOfSquares;
}

function brutForceDivisors(num) {
  let currentNumber = num; // The number we're looking for will not be less that the highest divisor so start from the highest divisor.

  for (let i = 1; i <= num; i++) {
    // Initialize i at 1 because we're using numbers 1 through num.
    if (currentNumber % i !== 0) {
      i = 0; // Reinitialize i to zero because the for-loop will increment it to 1 before testing the if-condition.
      currentNumber++; // Get the next highest number.
    }
  }

  return currentNumber;
}

function largestPalidromeProduct() {
  let palindromes = [];
  let factorList = {};
  for (let i = 100; i < 1000; i++) {
    if (!factorList[i]) {
      factorList[i] = i;
    }
  }
  console.log(factorList);
  let product = 0;
  let reversed = '';
  for (let j = 100; j < 1000; j++) {
    product = factorList[j] * j;
    console.log(product);
    reversed = product
      .toString()
      .split('')
      .reverse()
      .join('');
    console.log(reversed);
    if (product === Number.parseInt(reversed)) {
      console.log();
      palindromes.push(product);
    }
  }
  console.log(palindromes);
  return palindromes[palindromes.length - 1];
}

var reverse = function(num) {
  let posNegFactor = 1;
  if (num < 0) {
    posNegFactor = -1;
  }

  reversedNumber = Math.abs(num)
    .toString()
    .split('')
    .reverse()
    .join('');

  console.log(reversedNumber);
  reversedNumber = Number.parseInt(reversedNumber);
  return reversedNumber * posNegFactor;
};

var sumZero = function(n) {
  // Find the addends of n
  // Find the addends of the addends of n
  let addendsOfN = {};
  let output = [];
  for (let i = 0; i < n; i + 6) {
    if (output.length < n) {
      output.push(i);
      output.push(-i);
    }
  }
  console.log(output);
};
