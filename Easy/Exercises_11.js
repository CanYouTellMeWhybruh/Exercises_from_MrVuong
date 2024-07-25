// Tìm số nhỏ nhất trong mảng

function CheckMin(myArray) {
  let Min = myArray[0];

  for (let i = 1; i < myArray.length; i++) {
    if (Min > myArray[i]) {
      Min = myArray[i];
    }
  }

  return Min;
}

const testCases = [
  { array: [2, 1, 2, 5, 7], expected: 1 },
  { array: [4, 55, 77], expected: 4 },
  { array: [7, 77, 777], expected: 7 },
  { array: [5, 55, 65], expected: 5 },
  { array: [55, 44, 77], expected: 44 },
  { array: [3, 2, 5], expected: 2 },
  { array: [5, 77, 2, 9, 1, 3, 7, 9], expected: 1 },
  { array: [62, 4, 652, 64, 5, 45, 4], expected: 4 },
  { array: [7, 6, 4, 1, 4, 4, 0], expected: 0 },
  { array: [8, 9, 1, 3, 8, 1, 0], expected: 0 },
];
function testCheckMin() {
  testCases.forEach((testCase, index) => {
    const { array, expected } = testCase;
    const result = CheckMin(array);
    const isPassed = result === expected;
    console.log(`Test case ${index + 1} : ${isPassed ? "Pass" : "Fail"}.`);
  });
}

module.exports = {
  exec: testCheckMin,
};
