const ex10 = require("../Exercises_10");

const testCases = {
  input: [
    [1, 2, 3, 4, 5],
    [-1, -2, -3, -4, -5],
    [5, 4, 3, 2, 1],
    [1],
    [0, -1, -2, -3, -4],
    [100, 200, 300, 400, 500],
    [3, 3, 3, 3, 3],
    [-5, -10, -15, -20, -25],
    [50, 40, 30, 20, 10],
    [1, 100, 2, 200, 3, 300],
  ],
  expect: [5, -1, 5, 1, 0, 500, 3, -5, 50, 300],
};

function check(result, expect) {
  return result === expect;
}

function test() {
  console.log(`<=== Ex10 - test case START ===>`);
  testCases.input.forEach((input, index) => {
    const result = ex10.exec(input);
    const isPassed = check(result, testCases.expect[index]);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
  });
  console.log(`=== Ex10 - test case END ===>`);
}

test();
module.exports = {
  test: test,
};
