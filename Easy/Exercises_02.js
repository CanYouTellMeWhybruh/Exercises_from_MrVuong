// Tính a mũ b

function exponentCalculator(arr) {
  let a = arr[0];
  let b = arr[1];
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }

  return result;
}
module.exports = {
  exec: exponentCalculator,
};
