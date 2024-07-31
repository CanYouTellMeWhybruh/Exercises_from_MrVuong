const ex06 = require("../Exercises_06");

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
    0, // Test case 2: Không có số chẵn => tổng là 0
    30, // Test case 3: Tất cả đều là số chẵn => tổng là 30
    12, // Test case 4: 2 + 4 + 6 = 12
    -6, // Test case 5: -2 + -4 + 0 = -6
    20,
    0,
    0,
    15000,
    2,
  ],
};

function check(result, expect) {
  return result === expect;
}

function test() {
  console.log(`<=== Ex6 - test case START ===>`);
  testCases.input.forEach((input, index) => {
    const result = ex06.exec(input);
    const isPassed = check(result, testCases.expect[index]);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
  });
  console.log(`=== Ex6 - test case END ===>`);
}

test();
module.exports = {
  test: test,
};
