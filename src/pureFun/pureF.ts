// 純粋関数の呼び出し
import React from "react";
import PureFM from "./PureFM";
// サンプル1 単純に呼び出し
export function test1(a:number, b:number) {
  return a + b;
}

// サンプル2 mock関数(callback)
export function test2(items:Array<number>, callback:React.FC<number>) {
  let sum:number = 0;
  for (let index = 0; index < items.length; index++) {
    let result = callback(items[index]);
    if (result) {
      sum = -1;
      break;
    } else {
      sum += items[index];
    }
  }

  return sum;
}

