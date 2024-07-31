const ex01 = require("../Exercises_01");
const testCases = {
  input: [
    [[3, 1, 2], "ascending"],
    [[3, 1, 2], "descending"],
    [[], "ascending"],
    [[], "descending"],
    [[5], "ascending"],
    [[5], "descending"],
    [[3, 5, 1, 4, 2], "ascending"],
    [[3, 5, 1, 4, 2], "descending"],
    [[1, 2, 3, 4, 5], "ascending"],
    [[1, 2, 3, 4, 5], "descending"],
    [[5, 4, 3, 2, 1], "ascending"],
    [[5, 4, 3, 2, 1], "descending"],
    [[-1, -3, -2, 0, 2, 1], "ascending"],
    [[-1, -3, -2, 0, 2, 1], "descending"],
    [[1.5, 3.2, 2.8, 1.2], "ascending"],
    [[1.5, 3.2, 2.8, 1.2], "descending"],
    [[1, 2, 2, 1], "ascending"],
    [[1, 2, 2, 1], "descending"],
    [[5, -3, 0, 2, 4], "ascending"],
    [[5, -3, 0, 2, 4], "descending"],
    [[1, 1, 1, 1], "ascending"],
    [[1, 1, 1, 1], "descending"],
    [[1, 2, 3, 4, 5], "random"],
  ],
  expect: [
    [1, 2, 3],
    [3, 2, 1],
    [],
    [],
    [5],
    [5],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [-3, -2, -1, 0, 1, 2],
    [2, 1, 0, -1, -2, -3],
    [1.2, 1.5, 2.8, 3.2],
    [3.2, 2.8, 1.5, 1.2],
    [1, 1, 2, 2],
    [2, 2, 1, 1],
    [-3, 0, 2, 4, 5],
    [5, 4, 2, 0, -3],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    "Nhập lệnh cú pháp bị sai!",
  ],
};

function check(result, expect) {
  return JSON.stringify(result) === JSON.stringify(expect);
}

function test() {
  console.log(`<=== Ex1 - test case START ===>`);
  testCases.input.forEach((input, index) => {
    const result = ex01.exec(...input);
    const isPassed = check(result, testCases.expect[index]);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
    if (!isPassed) {
      console.log(`  Expected: ${JSON.stringify(testCases.expect[index])}`);
      console.log(`  Got: ${JSON.stringify(result)}`);
    }
  });
  console.log(`=== Ex1- test case END ===>`);
}
test();
module.exports = {
  test: test,
};
