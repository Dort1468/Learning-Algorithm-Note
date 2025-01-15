let moveCount = 0;
let recursionDepth = 0;

function hanoi(
  n,
  source,
  auxiliary,
  target,
  sourceName = "A",
  auxName = "B",
  targetName = "C",
  functionName = "A → C"
) {
  let indent = "  ".repeat(recursionDepth);

  console.log(`${indent}執行函式: ${functionName} (n = ${n})`);
  console.log(`${indent}當前狀態：`);
  console.log(`${indent}柱子 ${sourceName}: [${source}]`);
  console.log(`${indent}柱子 ${auxName}: [${auxiliary}]`);
  console.log(`${indent}柱子 ${targetName}: [${target}]`);
  console.log(`${indent}------------------------`);

  // 基本情況：只移動一個盤子
  if (n === 1) {
    let disk = source.pop();
    target.push(disk);
    moveCount++;
    console.log(`${indent}基本情況: n = 1`);
    console.log(
      `${indent}步驟 ${moveCount}: 執行 ${functionName} - 將盤子 ${disk} 從柱子 ${sourceName} 移動到柱子 ${targetName}`
    );
    return;
  }

  // 遞迴步驟 1: 從來源移到輔助柱
  recursionDepth++;
  console.log(
    `${indent}遞迴呼叫 1: ${sourceName} → ${auxName} (使用 ${targetName} 作為輔助)`
  );
  hanoi(
    n - 1,
    source,
    target,
    auxiliary,
    sourceName,
    targetName,
    auxName,
    `${sourceName} → ${auxName}`
  );
  recursionDepth--;

  // 步驟 2: 移動最大的盤子
  let disk = source.pop();
  target.push(disk);
  moveCount++;
  console.log(
    `${indent}步驟 ${moveCount}: 執行 ${functionName} - 將盤子 ${disk} 從柱子 ${sourceName} 移動到柱子 ${targetName}`
  );

  // 遞迴步驟 3: 從輔助柱移到目標柱
  recursionDepth++;
  console.log(
    `${indent}遞迴呼叫 2: ${auxName} → ${targetName} (使用 ${sourceName} 作為輔助)`
  );
  hanoi(
    n - 1,
    auxiliary,
    source,
    target,
    auxName,
    sourceName,
    targetName,
    `${auxName} → ${targetName}`
  );
  recursionDepth--;

  console.log(`${indent}完成函式 ${functionName}`);
  console.log(`${indent}當前狀態：`);
  console.log(`${indent}柱子 ${sourceName}: [${source}]`);
  console.log(`${indent}柱子 ${auxName}: [${auxiliary}]`);
  console.log(`${indent}柱子 ${targetName}: [${target}]`);
  console.log(`${indent}------------------------`);
}

// 測試代碼，使用2個盤子來演示
let source = [3, 2, 1]; // 初始柱子 A
let auxiliary = []; // 輔助柱子 B
let target = []; // 目標柱子 C

console.log("開始執行漢諾塔問題解決方案（2個盤子）");
console.log("初始狀態：");
console.log("柱子 A:", source);
console.log("柱子 B:", auxiliary);
console.log("柱子 C:", target);
console.log("========================");

hanoi(source.length, source, auxiliary, target);

console.log("\n最終狀態：");
console.log("柱子 A:", source);
console.log("柱子 B:", auxiliary);
console.log("柱子 C:", target);
console.log(`總共移動了 ${moveCount} 步`);

// 重置計數器
moveCount = 0;
recursionDepth = 0;
