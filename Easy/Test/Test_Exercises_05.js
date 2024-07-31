const ex05 = require("../Exercises_05");
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
  expect: [0, 5, 0, 3, 3, 4, 0, 5, 0, 7],
};
function check(result, expect) {
  return result === expect;
}

function test() {
  console.log(`<=== Ex5 - test case START ===>`);
  testCases.input.forEach((input, index) => {
    const result = ex05.exec(input);
    const isPassed = check(result, testCases.expect[index]);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
  });
  console.log(`=== Ex5 - test case END ===>`);
}

test();
module.exports = {
  test: test,
};
