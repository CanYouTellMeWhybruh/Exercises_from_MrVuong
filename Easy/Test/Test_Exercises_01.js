const ex1 = require("../Exercises_01");

// Matrix of test cases
const testCases = [
  {
    input: [1, 2, 3],
    expect: [2, 3, 1],
  },
  {
    input: [0, 0, 0],
    expect: [0, 0, 0],
  },
  {
    input: [-1, -2, -3],
    expect: [-2, -3, -1],
  },
  {
    input: [10, 20, 30],
    expect: [20, 30, 10],
  },
  {
    input: [100, 200, 300],
    expect: [200, 300, 100],
  },
  {
    input: [1, 1, 1],
    expect: [1, 1, 1],
  },
  {
    input: [5, 10, 15],
    expect: [10, 15, 5],
  },
  {
    input: [3, 6, 9],
    expect: [6, 9, 3],
  },
  {
    input: [7, 14, 21],
    expect: [14, 21, 7],
  },
  {
    input: [2, 4, 6],
    expect: [4, 6, 2],
  },
];

function check(result, expect) {
  return JSON.stringify(result) === JSON.stringify(expect);
}

function test() {
  console.log(`<=== Ex1 - test case START ===>`);
  testCases.forEach((testCase, index) => {
    const result = ex1.exec(testCase.input);
    const isPassed = check(result, testCase.expect);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
  });
  console.log(`=== Ex1 - test case END ===>`);
}
module.exports = {
  test: test,
};
