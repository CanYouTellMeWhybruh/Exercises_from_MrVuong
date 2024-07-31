const ex13 = require("../Exercises_13");

const testCases = {
  input: [
    [1, 2, 3, 4, 5],
    [10, 20, 30],
    [7, 8, 9, 10],
    [1],
    [],
    [3, 2, 1],
    [-5, -10, -15],
    [10, 20, 30, 40],
    [5, 4, 3, 2, 1],
    [1, 3, 5, 7, 9, 11],
  ],
  expect: [
    [5, 4, 3, 2, 1],
    [30, 20, 10],
    [10, 9, 8, 7],
    [1],
    [],
    [1, 2, 3],
    [-15, -10, -5],
    [40, 30, 20, 10],
    [1, 2, 3, 4, 5],
    [11, 9, 7, 5, 3, 1],
  ],
};

function check(result, expect) {
  return JSON.stringify(result) === JSON.stringify(expect);
}

function test() {
  console.log(`<=== Ex13 - test case START ===>`);
  testCases.input.forEach((input, index) => {
    const result = ex13.exec(input);
    const isPassed = check(result, testCases.expect[index]);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
  });
  console.log(`=== Ex13 - test case END ===>`);
}

test();
module.exports = {
  test: test,
};
