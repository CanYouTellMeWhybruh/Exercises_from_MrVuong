// Tính n giai thừa
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

module.exports = {
  exec: factorial,
};
