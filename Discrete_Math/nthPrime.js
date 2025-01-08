/* 

Write a function called nthPrime() that takes a positive integer as 
input and returns the nth value in the prime number list.

*/

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function nthPrime(n) {
  if (n < 1 || !Number.isInteger(n)) {
    throw new Error("Positive Integer Only");
  }

  const primeList = [2, 3, 5, 7, 11, 13];
  let starter = 17;

  while (primeList.length < n) {
    if (isPrime(starter)) {
      primeList.push(starter);
    }
    starter++;
  }
  return primeList[n - 1];
}

console.log(nthPrime(1)); // 2
console.log(nthPrime(2)); // 3
console.log(nthPrime(3)); // 5
console.log(nthPrime(4)); // 7
console.log(nthPrime(5)); // 11
console.log(nthPrime(10)); // 29
console.log(nthPrime(7)); // 17

/* 
    n >= 2, n is either a prime or a product of primes
*/

function anotherNthPrime(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("Positive Integer Only!!");
  }

  const primeList = [2, 3, 5, 7, 11, 13];
  let starter = 17;

  while (primeList.length < n) {
    let primeCheck = true;
    for (let number of primeList) {
      if (starter % number == 0) {
        primeCheck = false;
        break;
      }
    }
    if (primeCheck) {
      primeList.push(starter);
    }
    starter += 2;
  }
  return primeList[n - 1];
}

console.log(anotherNthPrime(10));
console.log(anotherNthPrime(20));
console.log(anotherNthPrime(30));
console.log(anotherNthPrime(100));
