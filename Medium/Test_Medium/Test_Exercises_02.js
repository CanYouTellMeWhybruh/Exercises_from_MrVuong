const ex02 = require("../Exercises_02");

const testCases = {
  input: [
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    [[], [4, 5, 6]],
    [[1, 2, 3], []],
    [[], []],
    [[1], [2]],
    [
      ["a", "b", "c"],
      ["d", "e", "f"],
    ],
    [
      [true, false],
      [false, true],
    ],
    [
      [null, undefined],
      [undefined, null],
    ],
    [
      [1, 2, 3],
      [3, 2, 1],
    ],
    [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
    ],
  ],
  expect: [
    [1, 2, 3, 4, 5, 6],
    [4, 5, 6],
    [1, 2, 3],
    [],
    [1, 2],
    ["a", "b", "c", "d", "e", "f"],
    [true, false, false, true],
    [null, undefined, undefined, null],
    [1, 2, 3, 3, 2, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ],
};

function check(result, expect) {
  return JSON.stringify(result) === JSON.stringify(expect);
}

function test() {
  console.log(`<=== Ex2 - test case START ===>`);
  testCases.input.forEach((input, index) => {
    const [arrA, arrB] = input;
    const result = ex02.exec([...arrA], arrB); // Sử dụng [...arrA] để tránh thay đổi giá trị ban đầu
    const isPassed = check(result, testCases.expect[index]);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
    if (!isPassed) {
      console.log(`  Expected: ${JSON.stringify(testCases.expect[index])}`);
      console.log(`  Got: ${JSON.stringify(result)}`);
    }
  });
  console.log(`=== Ex2- test case END ===>`);
}
test();
module.exports = {
  test: test,
};
