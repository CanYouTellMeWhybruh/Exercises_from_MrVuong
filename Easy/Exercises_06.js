// Tính tổng số chẵn trong mảng

const testCasesEvenSum = [
  {
    Array: [],
    expected: 0,
  },
  {
    Array: [1, 3, 5, 7, 9],
    expected: 0,
  },
  {
    Array: [2, 4, 6, 8, 10],
    expected: 30,
  },
  {
    Array: [1, 2, 3, 4, 5, 6],
    expected: 12,
  },
  {
    Array: [-2, -4, -1, -3, 0],
    expected: -6,
  },
  {
    Array: [1, 2, 3, 4, 5, 6, 7, 8],
    expected: 20,
  },
  {
    Array: [0],
    expected: 0,
  },
  {
    Array: [1000, 2000, 3000, 4000, 5000],
    expected: 15000,
  },
  {
    Array: [1001, 2003, 3005, 4007, 5009],
    expected: 0,
  },
  {
    Array: [2, 3, 5, 7, 11, 13, 17, 19],
    expected: 2,
  },
];

function totalEven(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      total += arr[i];
    }
  }
  return total;
}

function testTotalEven() {
  testCasesEvenSum.forEach((testCase, index) => {
    const { Array, expected } = testCase;
    const result = totalEven(Array);
    const isPassed = result === expected;
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}.`);
  });
}

module.exports = {
  exec: testTotalEven,
};