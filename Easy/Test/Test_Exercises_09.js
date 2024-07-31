const ex09 = require("../Exercises_09");

const testCases = {
  input: [
    [10, 3],
    [15, 4],
    [9, 3],
    [7, 2],
    [14, 5],
    [8, 2],
    [21, 7],
    [19, 6],
    [100, 9],
    [0, 5],
  ],
  expect: [
    1, // 10 % 3 = 1
    3, // 15 % 4 = 3
    0, // 9 % 3 = 0
    1, // 7 % 2 = 1
    4, // 14 % 5 = 4
    0, // 8 % 2 = 0
    0, // 21 % 7 = 0
    1, // 19 % 6 = 1
    1, // 100 % 9 = 1
    0, // 0 % 5 = 0
  ],
};

function check(result, expect) {
  return result === expect;
}

function test() {
  console.log(`<=== Ex9 - test case START ===>`);
  testCases.input.forEach((input, index) => {
    const result = ex09.exec(input[0], input[1]);
    const isPassed = check(result, testCases.expect[index]);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
  });
  console.log(`=== Ex9 - test case END ===>`);
}

test();
module.exports = {
  test: test,
};
