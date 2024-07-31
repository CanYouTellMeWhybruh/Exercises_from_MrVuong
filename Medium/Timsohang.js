// // Tìm những số hạng trong một dãy số mà lớn hơn tổng các số đứng trước nó

// function FindNumber(arr) {
//   let total = 0;
//   let Number = [];
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//     if (arr[i + 1] > total) {
//       Number.push(arr[i + 1]);
//     }
//   }
//   return Number;
// }
// console.log(`${FindNumber([1, 2, 3, 4, 5, 15, 7, 50])}.`);

function FindNumberV2(n) {
  if (n == 0) {
    return 1;
  } else if (n == 1) {
    return 2;
  } else {
    return FindNumberV2(n - 1) * FindNumberV2(n - 2);
  }
}
function FindFibonacci(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
    for (let i = 2; i < n + 1; i++) {
      let tmp = a;
      a = b;
      b = tmp + b;
    }
    return b;
  }
}
function FindNumberV3(n) {
  if (n == 0) {
    return 1;
  } else if (n == 1) {
    return 2;
  } else {
    let a0 = 1;
    let a1 = 2;
    let an = a0 * a1;
    for (let i = 2; i < n + 1; i++) {
      let an = a0 * a1;
      a0 = a1;
      a1 = an;
    }
    return a1;
  }
}
console.log(`${FindNumberV3(5)}`);
