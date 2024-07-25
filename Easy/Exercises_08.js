// Kiểm tra số nguyên tố
function checkPrime(myNumber) {
  if (myNumber < 2) {
    return 0; // Số nhỏ hơn 2 không phải là số nguyên tố
  }
  if (myNumber === 2) {
    return 1; // 2 là số nguyên tố
  }
  for (let i = 2; i <= Math.sqrt(myNumber); i++) {
    if (myNumber % i === 0) {
      return 0; // myNumber không phải là số nguyên tố nếu chia hết cho i
    }
  }
  return 1; // myNumber là số nguyên tố
}

// Các trường hợp thử nghiệm
const testCases = [
  { number: 1, expected: 0 },
  { number: 2, expected: 1 },
  { number: 3, expected: 1 },
  { number: 4, expected: 0 },
  { number: 5, expected: 1 },
  { number: 9, expected: 0 },
  { number: 11, expected: 1 },
  { number: 16, expected: 0 },
  { number: 17, expected: 1 },
  { number: 18, expected: 0 },
  { number: 19, expected: 1 },
];

// Hàm kiểm tra
function testCheckPrime() {
  testCases.forEach((testCase, index) => {
    const { number, expected } = testCase;
    const result = checkPrime(number);
    const isPassed = result === expected;
    console.log(
      `Test case ${index + 1}: ${
        isPassed ? "PASS" : "FAIL"
      } (number: ${number}, expected: ${expected}, got: ${result})`
    );
  });
}

// Chạy kiểm tra

module.exports = {
  exec: testCheckPrime,
};
