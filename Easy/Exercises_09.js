// Tìm số dư của a chia b không dùng %

function surplus(a, b) {
  let remain = 0;
  while (true) {
    if (a >= b) {
      a -= b;
    } else {
      remain = a;
      break;
    }
  }

  return remain;
}

const testCases = [
  [2, 1, 0],
  [23, 10, 3],
  [5, 2, 1],
  [8, 2, 0],
  [10, 6, 4],
  [3, 2, 1],
  [14, 7, 0],
  [6, 4, 2],
  [1, 1, 0],
  [7, 7, 0],
];
function testSurplus() {
  testCases.forEach((testCase, index) => {
    const [a, b, expectResult] = testCase;
    const result = surplus(a, b);
    const isPassed = result === expectResult;
    console.log(`Test case ${index + 1} : ${isPassed ? "Pass" : "Fail"}.`);
  });
}

module.exports = {
  exec: testSurplus,
};
