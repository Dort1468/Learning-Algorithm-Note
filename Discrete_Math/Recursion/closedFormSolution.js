/* 
Try to verify that the closed-form solution and recursion algorithm will return the same result of S(50)
Also, time the codes so that we know which one takes more time.

S(1) = 4
S(n) = 2S(n-1) + 3

*/

const { performance } = globalThis;

function recursion(n) {
  if (n === 1) {
    return 4;
  }

  return 2 * recursion(n - 1) + 3;
}

console.log(recursion(50));

function closedForm(n) {
  return 4 + 7 * ((1 - 2 ** (n - 1)) / (1 - 2));
}

const recursionStart = performance.now();
const recursionResult = recursion(1000);
const recursionEnd = performance.now();
console.log("Recursion result: ", recursionResult);
console.log("Performance: ", recursionEnd - recursionStart, " ms");
const closedFormStart = performance.now();
const closedFormResult = closedForm(1000);
const closedFormEnd = performance.now();
console.log("----------------------");
console.log("Close-Form result: ", closedFormResult);
console.log("Performance: ", closedFormEnd - closedFormStart, "ms");
