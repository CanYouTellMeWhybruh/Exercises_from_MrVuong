const ex04 = require("../Exercises_04");
const testCases = {
  input: [
    [],
    [1, 3, 5, 7, 9],
    [2, 4, 6, 8, 10],
    [1, 2, 3, 4, 5, 6],
    [-2, -4, -1, -3, 0],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [0],
    [1000, 2000, 3000, 4000, 5000],
    [1001, 2003, 3005, 4007, 5009],
    [2, 3, 5, 7, 11, 13, 17, 19],
  ],
  expect: [0, 0, 5, 3, 3, 4, 1, 5, 0, 1],
};
function check(result, expect) {
  return result === expect;
}

function test() {
  console.log(`<=== Ex4 - test case START ===>`);
  testCases.input.forEach((input, index) => {
    const result = ex04.exec(input);
    const isPassed = check(result, testCases.expect[index]);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
  });
  console.log(`=== Ex4 - test case END ===>`);
}
module.exports = {
  test: test,
};
