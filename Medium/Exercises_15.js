const prompt = require("prompt-sync")();

console.log(`Nhập vào số muốn tính:`);
let myNumber = Number(prompt());
let myNumberclone = myNumber;
let total_of_myNumber = 0;

while (myNumber > 0) {
  total_of_myNumber += myNumber % 10;
  myNumber = Math.floor(myNumber / 10);
}

console.log(
  `Tổng các chữ số của ${myNumberclone} cộng lại là ${total_of_myNumber}.`
);
