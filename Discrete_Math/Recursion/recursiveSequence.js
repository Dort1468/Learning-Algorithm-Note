/*
Part I - Write a function called "recursiveSequence()" that takes a positive integer input
n, and return the nth value of the recursively defined sequence:

A(1) = 1
A(n) = 2A(n-1) + 7 for n >= 2


Part II - Write a function called "Fab()" that takes a positive integer input n, 
and return the nth value of the Fibonacci Sequence

*/

function recursiveSequence(n) {
  if (n <= 0 || !Number.isInteger(n)) {
    throw new Error("Please enter a positive Integer");
  }

  if (n == 1) {
    return 1;
  }

  return 2 * recursiveSequence(n - 1) + 7;
}

// For loop - TimeComplexity -- O(n)

function fib(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

// Recursive Memoization - TimeComplexity -- O(n)

function fab(n) {
  if (!fab.cache) {
    fab.cache = {
      0: 0,
      1: 1,
    };
  }

  if (fab.cache[n] !== undefined) {
    return fab.cache[n];
  }
  fab.cache[n] = fab(n - 1) + fab(n - 2);
  return fab.cache[n];
}

console.log(recursiveSequence(1));
console.log(recursiveSequence(2));
console.log(recursiveSequence(3));
console.log(recursiveSequence(4));
console.log(recursiveSequence(5));
console.log("------------------");
console.log(fab(0));
console.log(fab(1));
console.log(fab(2));
console.log(fab(3));
console.log(fab(4));
console.log(fab(5));
console.log(fab(6));
