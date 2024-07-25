// Tính a mũ b

function exponentCalculator(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }

  return result;
}
const testCases = [
  [3, 4, 81],
  [2, 3, 8],
  [1, 2, 1],
  [4, 2, 16],
  [5, 3, 125],
  [6, 2, 36],
  [7, 2, 49],
  [6, 3, 216],
  [2, 7, 128],
  [1, 77, 1],
];

function testExponentCalculator() {
  testCases.forEach((testCase, index) => {
    const [a, b, expectedResult] = testCase;
    const result = exponentCalculator(a, b);
    const Nothing = expectedResult;
    const final = result === Nothing;
    console.log(`Test case ${index + 1} : ${final ? "PASS" : "FAIL"}`);
  });
}

module.exports = {
  exec: testExponentCalculator,
};
