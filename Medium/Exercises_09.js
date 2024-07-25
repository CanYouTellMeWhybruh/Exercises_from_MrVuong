let ArrA = [1, 2, 3, 4, 5, 6, 7, 14, 15, 16, 17, 18];
let ArrB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let total = 0;
for (let i = 0; i < ArrA.length; i++) {
  let mean = true;
  for (let j = 0; j < ArrA.length; j++) {
    if (ArrA[i] == ArrB[j]) {
      mean = false;
      break;
    } else {
      continue;
    }
  }
  if (mean) {
    total += ArrA[i];
  } else {
    continue;
  }
}
console.log(`Tổng các phần tử ở mảng A mà không nằm trong mảng B là ${total}`);
