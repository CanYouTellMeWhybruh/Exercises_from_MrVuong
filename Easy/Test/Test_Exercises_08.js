const ex08 = require("../Exercises_08");

const testCases = {
  input: [-1, 0, 1, 2, 3, 4, 5, 16, 17, 18],
  expect: [
    0, // -1 không phải là số nguyên tố
    0, // 0 không phải là số nguyên tố
    0, // 1 không phải là số nguyên tố
    1, // 2 là số nguyên tố
    1, // 3 là số nguyên tố
    0, // 4 không phải là số nguyên tố
    1, // 5 là số nguyên tố
    0, // 16 không phải là số nguyên tố
    1, // 17 là số nguyên tố
    0, // 18 không phải là số nguyên tố
  ],
};

function check(result, expect) {
  return result === expect;
}

function test() {
  console.log(`<=== Ex8 - test case START ===>`);
  testCases.input.forEach((input, index) => {
    const result = ex08.exec(input);
    const isPassed = check(result, testCases.expect[index]);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
  });
  console.log(`=== Ex8 - test case END ===>`);
}

test();
module.exports = {
  test: test,
};
