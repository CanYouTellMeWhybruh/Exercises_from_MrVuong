function testArrayConcatenation() {
  const testCases = [
    {
      ArrA: [1, 2, 3, 4, 5],
      ArrB: [6, 7, 8, 9, 10],
      expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    { ArrA: [10, 20], ArrB: [30, 40], expected: [10, 20, 30, 40] },
    { ArrA: [], ArrB: [1, 2, 3], expected: [1, 2, 3] },
    { ArrA: [1, 2], ArrB: [], expected: [1, 2] },
    { ArrA: [], ArrB: [], expected: [] },
    { ArrA: [1], ArrB: [2], expected: [1, 2] },
    { ArrA: [5, 6, 7], ArrB: [8], expected: [5, 6, 7, 8] },
    { ArrA: [1, 2], ArrB: [3, 4, 5], expected: [1, 2, 3, 4, 5] },
    { ArrA: [0], ArrB: [1, 2, 3, 4], expected: [0, 1, 2, 3, 4] },
    { ArrA: [10, 11, 12], ArrB: [13, 14], expected: [10, 11, 12, 13, 14] },
  ];

  testCases.forEach((testCase, index) => {
    let result = [...testCase.ArrA]; // Clone ArrA
    for (let i = 0; i < testCase.ArrB.length; i++) {
      result.push(testCase.ArrB[i]);
    }

    const isSuccess =
      JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log(`Test ${index + 1}: ${isSuccess ? "Đúng" : "Sai"}`);
  });
}

testArrayConcatenation();
