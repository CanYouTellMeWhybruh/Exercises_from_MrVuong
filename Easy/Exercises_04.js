// Đếm số lượng số chẵn trong mảng

const testCases = [
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
    expected: 5,
  },
  {
    Array: [1, 2, 3, 4, 5, 6],
    expected: 3,
  },
  {
    Array: [-2, -4, -1, -3, 0],
    expected: 3,
  },
  {
    Array: [1, 2, 3, 4, 5, 6, 7, 8],
    expected: 4,
  },
  {
    Array: [0],
    expected: 1,
  },
  {
    Array: [1000, 2000, 3000, 4000, 5000],
    expected: 5,
  },
  {
    Array: [1001, 2003, 3005, 4007, 5009],
    expected: 0,
  },
  {
    Array: [2, 3, 5, 7, 11, 13, 17, 19],
    expected: 1,
  },
];

function countEven(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      count += 1;
    }
  }
  return count;
}

function testCountEven() {
  testCases.forEach((testCase, index) => {
    const { Array, expected } = testCase;
    const result = countEven([...Array]); // using spread operator to avoid mutation
    const isPassed = result === expected;
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}.`);
  });
}

module.exports = {
  exec: testCountEven,
};
