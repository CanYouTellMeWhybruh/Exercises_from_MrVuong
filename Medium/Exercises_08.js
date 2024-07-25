let ArrA = [1, 2, 3, 4, 5, 6, 7];
let ArrB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let total = 0;
for (let i = 0; i < ArrA.length; i++) {
  for (let j = 0; j < ArrA.length; j++) {
    if (ArrA[i] == ArrB[j]) {
      total += ArrB[j];
    }
  }
}
console.log(`Tổng các phần tử ở mảng A mà nằm trong mảng B là ${total}`);
