//Đảo ngược từng từ trong một câu
function reverseWords(sentence) {
  const words = sentence.split(" "); // Tách câu thành các từ
  const reversedWords = words.map((word) => word.split("").reverse().join("")); // Đảo ngược từng từ
  const reversedSentence = reversedWords.join(" "); // Ghép các từ lại thành câu
  return reversedSentence;
}

// Ví dụ sử dụng
const sentence = "Hello World! I'm from the Earth";
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence);
