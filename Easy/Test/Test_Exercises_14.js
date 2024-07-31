const ex14 = require("../Exercises_14");

const testCases = {
  input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  expect: [
    1, // 0! = 1
    1, // 1! = 1
    2, // 2! = 2
    6, // 3! = 6
    24, // 4! = 24
    120, // 5! = 120
    720, // 6! = 720
    5040, // 7! = 5040
    40320, // 8! = 40320
    362880, // 9! = 362880
    3628800, // 10! = 3628800
  ],
};

function check(result, expect) {
  return result === expect;
}

function test() {
  console.log(`<=== Ex14 - test case START ===>`);
  testCases.input.forEach((input, index) => {
    const result = ex14.exec(input);
    const isPassed = check(result, testCases.expect[index]);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
  });
  console.log(`=== Ex14 - test case END ===>`);
}

test();
module.exports = {
  test: test,
};
