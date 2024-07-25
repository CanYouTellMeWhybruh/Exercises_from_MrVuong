// Tính giá trị trung bình trong mảng

function averageCalculation(myArray) {
  let total = 0;
  let mean;

  for (let i = 0; i < myArray.length; i++) {
    total += myArray[i];
  }

  mean = Math.floor(total / myArray.length);

  return mean;
}

const testCases = [
  { array: [2, 1, 2, 5, 7], expected: 3 },
  { array: [4, 55, 77], expected: 45 },
  { array: [7, 77, 777], expected: 287 },
  { array: [5, 55, 65], expected: 41 },
  { array: [55, 44, 77], expected: 58 },
  { array: [3, 2, 5], expected: 3 },
  { array: [5, 77, 2, 9, 1, 3, 7, 9], expected: 14 },
  { array: [62, 4, 652, 64, 5, 45, 4], expected: 119 },
  { array: [7, 6, 4, 1, 4, 4, 0], expected: 3 },
  { array: [8, 9, 1, 3, 8, 1, 0], expected: 4 },
];

function testAverageCalculation() {
  testCases.forEach((testCase, index) => {
    const { array, expected } = testCase;
    const result = averageCalculation(array);
    const isPassed = result === expected;
    console.log(`Test case ${index + 1} : ${isPassed ? "Pass" : "Fail"}.`);
  });
}

module.exports = {
  exec: testAverageCalculation,
};
