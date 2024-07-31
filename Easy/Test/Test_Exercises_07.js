const ex07 = require("../Exercises_07");
const testCases = {
  input: [
    [],
    [1, 3, 5, 7, 9],
    [2, 4, 6, 8, 10],
    [1, 2, 3, 4, 5, 6],
    [-1, -3, -5, -2, -4, 0],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [0],
    [1001, 2003, 3005, 4007, 5009],
    [1000, 2000, 3000, 4000, 5000],
    [2, 3, 5, 7, 11, 13, 17, 19],
  ],
  expect: [
    0, // Test case 1: Không có phần tử nào trong mảng => tổng là 0
    25, // Test case 2: 1 + 3 + 5 + 7 + 9 = 25
    0, // Test case 3: Không có số lẻ => tổng là 0
    9, // Test case 4: 1 + 3 + 5 = 9
    -9, // Test case 5: -1 + -3 + -5 = -9
    16, // Test case 6: 1 + 3 + 5 + 7 = 16
    0, // Test case 7: 0 không phải là số lẻ => tổng là 0
    15025, // Test case 8: 1001 + 2003 + 3005 + 4007 + 5009 = 15025
    0, // Test case 9: Không có số lẻ => tổng là 0
    75, // Test case 10: 3 + 5 + 7 + 11 + 13 + 17 + 19 = 77
  ],
};

function check(result, expect) {
  return result === expect;
}

function test() {
  console.log(`<=== Ex7 - test case START ===>`);
  testCases.input.forEach((input, index) => {
    const result = ex07.exec(input);
    const isPassed = check(result, testCases.expect[index]);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
  });
  console.log(`=== Ex7 - test case END ===>`);
}

test();
module.exports = {
  test: test,
};
