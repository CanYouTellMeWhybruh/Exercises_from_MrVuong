// Hoán đổi giá trị a b c

function swap(a, b, c) {
  let tmp = a;
  a = b;
  b = c;
  c = tmp;
  return [a, b, c];
}

// Matrix of test cases
const testCases = [
  // Each row is in the form of [a, b, c, expectedA, expectedB, expectedC]
  [1, 2, 3, 2, 3, 1],
  [0, 0, 0, 0, 0, 0],
  [-1, -2, -3, -2, -3, -1],
  [10, 20, 30, 20, 30, 10],
  [100, 200, 300, 200, 300, 100],
  [1, 1, 1, 1, 1, 1],
  [5, 10, 15, 10, 15, 5],
  [3, 6, 9, 6, 9, 3],
  [7, 14, 21, 14, 21, 7],
  [2, 4, 6, 4, 6, 2],
];

// Function to test the swap function
function testSwap() {
  testCases.forEach((testCase, index) => {
    const [a, b, c, expectedA, expectedB, expectedC] = testCase;
    const result = swap(a, b, c);
    const expectedResult = [expectedA, expectedB, expectedC];
    const isPassed = JSON.stringify(result) === JSON.stringify(expectedResult);

    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
  });
}

// Run the test

module.exports = {
  exec: testSwap,
};
