// Tính tổng số lẻ trong mảng

function totalOdd(myArray) {
  let total = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 != 0) {
      total += myArray[i];
    }
  }
  return total;
}
const testCases = [
  [1, 2, 3, 4, 5, 6, 7],
  [1, 5, 7, 8, 9, 10, 12],
  [5, 6, 7, 8, 9, 10, 11],
  [12, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 7],
  [1, 3, 2],
  [1, 5, 7],
  [5, 7],
  [1, 2],
  [7, 7],
];
const expectResult = [16, 22, 32, 51, 11, 4, 13, 12, 1, 14];
function testTotalOdd() {
  testCases.forEach((testCase, index) => {
    const result = totalOdd(testCase);
    const expectedResult = expectResult[index];
    const isPassed = result === expectedResult;
    console.log(`Test case ${index + 1} : ${isPassed ? "Pass" : "Fail"}.`);
  });
}

module.exports = {
  exec: testTotalOdd,
};
