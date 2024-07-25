function testSubtractArray() {
  const testCases = [
    {
      arrA: [1, 2, 3],
      arrB: [1, 1, 1],
      expected: [0, 1, 2],
    },
    {
      arrA: [-1, -2, -3],
      arrB: [-1, -1, -1],
      expected: [0, -1, -2],
    },
    {
      arrA: [0, 0, 0],
      arrB: [0, 0, 0],
      expected: [0, 0, 0],
    },
    {
      arrA: [1.5, 2.5, 3.5],
      arrB: [0.5, 1.5, 2.5],
      expected: [1, 1, 1],
    },
    {
      arrA: [1000000, 2000000, 3000000],
      arrB: [1000000, 1000000, 1000000],
      expected: [0, 1000000, 2000000],
    },
    {
      arrA: [5, -10, 15],
      arrB: [-5, 10, -15],
      expected: [10, -20, 30],
    },
    {
      arrA: [1, 2, 3],
      arrB: [3, 2, 1],
      expected: [-2, 0, 2],
    },
    {
      arrA: [0.1, 0.2, 0.3],
      arrB: [0.1, 0.1, 0.1],
      expected: [0, 0.1, 0.2],
    },
    {
      arrA: [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0],
      arrB: [1, 1, 1],
      expected: [Number.MAX_SAFE_INTEGER - 1, Number.MIN_SAFE_INTEGER - 1, -1],
    },
    {
      arrA: [1, 2, 3],
      arrB: [],
      expected: "Error: Arrays must be of the same length",
    },
  ];

  testCases.forEach((testCase, index) => {
    const { arrA, arrB, expected } = testCase;
    try {
      const result = SubtractArray(arrA, arrB);
      const isPassed = JSON.stringify(result) === JSON.stringify(expected);
      console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
    } catch (error) {
      const isPassed = error.message === expected;
      console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}`);
    }
  });
}
function SubtractArray(ArrA, ArrB) {
  if (ArrA.length !== ArrB.length) {
    throw new Error("Arrays must be of the same length");
  }

  let ArrMinus = [];
  for (let i = 0; i < ArrA.length; i++) {
    ArrMinus[i] = ArrA[i] - ArrB[i];
  }
  return ArrMinus;
}

// Chạy hàm testSubtractArray để kiểm tra kết quả
testSubtractArray();
