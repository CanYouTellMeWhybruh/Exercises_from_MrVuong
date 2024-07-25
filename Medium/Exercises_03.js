const testCasesArraySum = [
  {
    ArrA: [1, 2, 3, 4, 5],
    ArrB: [5, 4, 3, 2, 1],
    expected: [6, 6, 6, 6, 6],
  },
  {
    ArrA: [0, -1, -2],
    ArrB: [1, 2, 3],
    expected: [1, 1, 1],
  },
  {
    ArrA: [2, 4, 6],
    ArrB: [1, 3, 5],
    expected: [3, 7, 11],
  },
  {
    ArrA: [10, 20, 30],
    ArrB: [5, 15, 25],
    expected: [15, 35, 55],
  },
  {
    ArrA: [1],
    ArrB: [1],
    expected: [2],
  },
];

function testArraySum() {
  testCasesArraySum.forEach((testCase, index) => {
    const { ArrA, ArrB, expected } = testCase;
    let Arrtotal = [];
    if (ArrA.length !== ArrB.length) {
      console.log(
        `Test case ${index + 1}: FAIL. Hai mảng không có cùng độ dài.`
      );
    } else {
      for (let i = 0; i < ArrA.length; i++) {
        Arrtotal[i] = ArrA[i] + ArrB[i];
      }
      const isPassed = JSON.stringify(Arrtotal) === JSON.stringify(expected);
      console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}.`);
    }
  });
}

testArraySum();
