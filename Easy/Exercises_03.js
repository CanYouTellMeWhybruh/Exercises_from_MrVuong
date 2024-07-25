// Kiểm tra a b cùng chẵn cùng lẻ

function Check(a, b) {
  if ((a % 2 == 0 && b % 2 == 0) || (a % 2 != 0 && b % 2 != 0)) {
    return true;
  } else {
    return false;
  }
}
function TestCheck() {
  testCases = [
    [1, 2, false],
    [3, 4, false],
    [6, 8, true],
    [1, 1, true],
    [5, 9, true],
    [6, 7, false],
    [7, 9, true],
    [8, 10, true],
    [9, 4, false],
    [10, 1, false],
  ];
  testCases.forEach((testCase, index) => {
    const [a, b, expected] = testCase;
    const result = Check(a, b);
    const isPassed = result === expected;
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}.`);
  });
}

module.exports = {
  exec: TestCheck,
};
