//  Viết hàm trả về chữ số cuối cùng khác 0 của n giai thừa
const prompt = require("prompt-sync")();

let myFactorial;
do {
  myFactorial = prompt("Nhập vào số giai thừa cần tính: ");
  myFactorial = Number(myFactorial);
  if (isNaN(myFactorial) || myFactorial < 0) {
    console.log("Vui lòng nhập một số nguyên dương.");
  }
} while (isNaN(myFactorial) || myFactorial < 0);

function factorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

function checkLast(n) {
  while (n % 10 == 0) {
    n /= 10;
  }
  return n % 10;
}

console.log(
  `Chữ số cuối cùng khác 0 của ${myFactorial} giai thừa là ${checkLast(
    factorial(myFactorial)
  )}.`
);
