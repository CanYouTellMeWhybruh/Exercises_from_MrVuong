// Tính giai thừa

// const prompt = require("prompt-sync")();

// let myFactorial;
// do {
//   myFactorial = prompt("Nhập vào số giai thừa cần tính: ");
//   myFactorial = Number(myFactorial);
//   if (isNaN(myFactorial) || myFactorial < 0) {
//     console.log("Vui lòng nhập một số nguyên dương.");
//   }
// } while (isNaN(myFactorial) || myFactorial < 0);
function factorialCalculation(n) {
  function factorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }

  console.log(`Giai thừa của ${myFactorial} là ${factorial(myFactorial)}.`);
}

module.exports = {
  exec: factorialCalculation,
};
