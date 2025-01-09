/* 
Write a Euler's Totient Function calculator that returns the phi function value of a given input.
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

  return result;
}

function totientCalc(int) {
  const factorArr = factorization(int);
  const primeSet = new Set(factorArr);

  let result = int;

  for (let prime of primeSet) {
    result *= 1 - 1 / prime;
  }

  console.log(result.toFixed(0));
  return result.toFixed(0);
}

totientCalc(120);
totientCalc(133848);
