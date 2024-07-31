const ex03 = require("../Exercises_03");
const testCases = {
  input: [
    [1, 2],
    [3, 4],
    [6, 8],
    [1, 1],
    [5, 9],
    [6, 7],
    [7, 9],
    [8, 10],
    [9, 4],
    [10, 1],
  ],
  expect: [false, false, true, true, true, false, true, true, false, false],
};
function check(result, expect) {
  return result === expect;
}

function test() {
  console.log(`<=== Ex3 - test case START ===>`);
  testCases.input.forEach((input, index) => {
    const result = ex03.exec(input);
    const isPassed = check(result, testCases.expect[index]);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
  });
  console.log(`=== Ex3 - test case END ===>`);
}
module.exports = {
  test: test,
};
