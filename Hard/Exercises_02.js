//Random từ a đến b
function getRandom(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

const a = 7;
const b = 77;
const randomValue = getRandom(a, b);
console.log(randomValue);
