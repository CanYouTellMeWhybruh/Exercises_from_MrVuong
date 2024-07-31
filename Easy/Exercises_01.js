// Hoán đổi giá trị a b c

function swap(arr) {
  let a = arr[0];
  let b = arr[1];
  let c = arr[2];
  return swapArray(a, b, c);
}
function swapArray(a, b, c) {
  let tmp = a;
  a = b;
  b = c;
  c = tmp;
  return [a, b, c];
}

module.exports = {
  exec: swap,
};
