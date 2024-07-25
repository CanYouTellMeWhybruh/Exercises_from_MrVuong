// Viết hàm trả về số chữ số 0 xuất hiện trong giá trị của n giai thừa
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

function countZeros(n) {
  let count = 0;
  while (n > 0) {
    if (n % 10 == 0) {
      count += 1;
      n /= 10;
    } else {
      n = Math.floor(n / 10);
    }
  }
  return count;
}

console.log(
  `Số lượng số 0 xuất hiện trong ${myFactorial} giai thừa là ${countZeros(
    factorial(myFactorial)
  )} số.`
);
