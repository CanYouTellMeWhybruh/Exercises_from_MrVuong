function reversed() {
  function reverseWords(sentences) {
    const words = sentences.split(" ");
    const reversedWord = words.map((word) => word.split("").reverse().join(""));
    const reversedSentence = reversedWord.join(" ");
    return reversedSentence;
  }
  const sentence = "Messi is the Goat!";
  const reversedWord = reverseWords(sentence);
  console.log(reversedWord);
}
//Hàm tính giai thừa
function factorial(n) {
  let factorial = 1;
  for (let i = 1; i < n + 1; i++) {
    factorial *= i;
  }
  return factorial;
}
//Hàm tính chỉnh hợp(A)
function permutation(n, k) {
  let permutation;
  permutation = factorial(n) / factorial(n - k);
  return permutation;
}
//Hàm tính tổ hợp(C)
function combination(n, k) {
  let combination;
  combination = permutation(n, k) / factorial(k);
  return combination;
}
//Hàm chuyển từ thập phân(10) sang nhị phân(2)
function convertDecimalToBinary(n) {
  let conversion = "";
  while (n > 0) {
    conversion = String(n % 2) + conversion;
    n = Math.floor(n / 2);
  }
  return conversion || "0"; // In case n is 0, it should return "0".
}

const prompt = require("prompt-sync")();

// Hàm tính phương sai
function variance() {
  let myArray = [];
  while (true) {
    let n = Number(prompt("Nhập số vào ma trận, nhập vào 0 để thoát: "));
    if (n == 0) {
      break;
    }
    myArray.push(n);
    console.log(`Ma trận của bạn lúc này là ${myArray}.`);
  }

  if (myArray.length === 0) {
    console.log("Không có phần tử nào trong mảng.");
    return;
  }

  let total = 0;
  for (let i = 0; i < myArray.length; i++) {
    total += myArray[i];
  }

  let myArray_mean = total / myArray.length;

  let total2 = 0;
  for (let i = 0; i < myArray.length; i++) {
    total2 += (myArray[i] - myArray_mean) ** 2;
  }

  let myArray_variance = total2 / myArray.length;
  console.log(`Phương sai của mảng là ${myArray_variance}.`);
}
