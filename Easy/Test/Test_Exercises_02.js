const ex02 = require("../Exercises_02");

const testCases = {
  input: [
    [3, 4],
    [2, 3],
    [1, 2],
    [4, 2],
    [5, 3],
    [6, 2],
    [7, 2],
    [6, 3],
    [2, 7],
    [1, 77],
  ],
  expect: [81, 8, 1, 16, 125, 36, 49, 216, 128, 1],
};

function check(result, expect) {
  return result === expect;
}

function test() {
  console.log(`<=== Ex2 - test case START ===>`);
  testCases.input.forEach((input, index) => {
    const result = ex02.exec(input);
    const isPassed = check(result, testCases.expect[index]);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
  });
  console.log(`=== Ex2 - test case END ===>`);
}
module.exports = {
  test: test,
};
