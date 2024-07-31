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

module.exports = {
  exec: checkPrime,
};
