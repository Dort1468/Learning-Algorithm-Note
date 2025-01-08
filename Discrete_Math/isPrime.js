/*
 Write a function called isPrime() that takes a positive integer as an input 
 nad returns a Boolean value that indicates whether the input is a prime number.
 
*/

function isPrime(num) {
  if (num == 1) {
    return false;
  }

  let starter = 2;
  while (starter < Math.sqrt(num)) {
    if (num % starter == 0) {
      return false;
    }
    starter++;
  }
  return true;
}

console.log(isPrime(51)); // false
console.log(isPrime(101)); // true
console.log(isPrime(13)); // true
console.log(isPrime(17)); // true
console.log(isPrime(95622)); // false
console.log(isPrime(1)); // false
