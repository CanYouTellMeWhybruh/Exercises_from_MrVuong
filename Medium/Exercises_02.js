function MergeArrays(ArrA, ArrB) {
  for (let i = 0; i < ArrB.length; i++) {
    ArrA.push(ArrB[i]);
  }
  return ArrA;
}
function testMergeArrays() {
  const testCases = [
    {
      arrA: [1, 2, 3],
      arrB: [4, 5, 6],
      expected: [1, 2, 3, 4, 5, 6],
    },
    {
      arrA: [],
      arrB: [4, 5, 6],
      expected: [4, 5, 6],
    },
    {
      arrA: [1, 2, 3],
      arrB: [],
      expected: [1, 2, 3],
    },
    {
      arrA: [],
      arrB: [],
      expected: [],
    },
    {
      arrA: [1],
      arrB: [2],
      expected: [1, 2],
    },
    {
      arrA: ["a", "b", "c"],
      arrB: ["d", "e", "f"],
      expected: ["a", "b", "c", "d", "e", "f"],
    },
    {
      arrA: [true, false],
      arrB: [false, true],
      expected: [true, false, false, true],
    },
    {
      arrA: [null, undefined],
      arrB: [undefined, null],
      expected: [null, undefined, undefined, null],
    },
    {
      arrA: [1, 2, 3],
      arrB: [3, 2, 1],
      expected: [1, 2, 3, 3, 2, 1],
    },
    {
      arrA: [1, 2, 3, 4, 5],
      arrB: [6, 7, 8, 9, 10],
      expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  ];

  testCases.forEach((testCase, index) => {
    const { arrA, arrB, expected } = testCase;
    const result = MergeArrays(arrA, arrB);
    const isPassed = JSON.stringify(result) === JSON.stringify(expected);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}.`);
  });
}
testMergeArrays();
