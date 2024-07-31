const ex12 = require("../Exercises_12");

const testCases = {
  input: [
    [1, 2, 3, 4, 5],
    [10, 20, 30, 40, 50],
    [7, 8, 9],
    [1],
    [0, 0, 0, 0, 0],
    [3, 6, 9, 12],
    [-5, -10, -15, -20],
    [10, 20, 30],
    [3, 6, 9, 12, 15, 18],
    [1, 1, 1, 1, 1, 1, 1],
  ],
  expect: [3, 30, 8, 1, 0, 7, -13, 20, 10, 1],
};

function check(result, expect) {
  return result === expect;
}

function test() {
  console.log(`<=== Ex12 - test case START ===>`);
  testCases.input.forEach((input, index) => {
    const result = ex12.exec(input);
    const isPassed = check(result, testCases.expect[index]);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
  });
  console.log(`=== Ex12 - test case END ===>`);
}

test();
module.exports = {
  test: test,
};
