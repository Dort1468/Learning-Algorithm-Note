/*

Write a function called "hanoi()", which takes 4 inputs. The first input is the length of an array of integers,
the second input is an array of integers, and the third and fourth input are an empty array.

This function should follow the rules of Hanoi tower, and move all elements in
the first array to the third array.

*/

let moveCount = 0;

function hanoi(n, source, auxiliary, target) {
  if (n === 1) {
    target.push(source.pop());
    moveCount++;
    console.log(`將圓盤 ${target[target.length - 1]} 從來源柱子移動到目標柱子`);
    return;
  }
  hanoi(n - 1, source, target, auxiliary);

  target.push(source.pop());
  moveCount++;
  console.log(`將圓盤 ${target[target.length - 1]} 從來源柱子移動到目標柱子`);

  hanoi(n - 1, auxiliary, source, target);
}

let source = [3, 2, 1];
let auxiliary = [];
let target = [];

console.log("初始狀態：");
console.log("來源柱子:", source);
console.log("輔助柱子:", auxiliary);
console.log("目標柱子:", target);

hanoi(source.length, source, auxiliary, target);

console.log("\n最終狀態：");
console.log("來源柱子:", source);
console.log("輔助柱子:", auxiliary);
console.log("目標柱子:", target);
console.log(moveCount);
