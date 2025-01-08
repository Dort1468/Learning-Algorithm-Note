/*
Write a function that takes in one positive integer as input and return the 
prime factorization of the integer 

return the unique product of primes 

Example: 
    30 = 2*3*5
    1200 = 2*2*2*2*3*5*5

*/

function factorization(int) {
  if (int <= 0 || !Number.isInteger(int)) {
    throw new Error("Please Enter a positive integer!");
  }

  let divider = 2;
  let result = [];

  while (int >= divider) {
    if (int % divider === 0) {
      result.push(divider);
      int /= divider;
    } else {
      divider++;
    }
  }

  return result.join(" * ");
}

console.log(factorization(9));
console.log(factorization(8));
console.log(factorization(200));
console.log(factorization(410));
console.log(factorization(101));
