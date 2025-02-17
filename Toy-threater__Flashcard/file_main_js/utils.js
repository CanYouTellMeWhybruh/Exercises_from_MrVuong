// utils.js
import { RANDOM_COUNT_NUMBER, RANGE_MAX_NUMBER } from "./constants.js";

export function generateNumbers(type) {
  let num1 = Math.floor(Math.random() * RANGE_MAX_NUMBER) + 1;
  let num2 = Math.floor(Math.random() * RANGE_MAX_NUMBER) + 1;
  if (type === "subtract") {
    if (num1 < num2) {
      [num1, num2] = [num2, num1];
    }
  } else if (type === "divide") {
    num1 = num2 * (Math.floor(Math.random() * RANGE_MAX_NUMBER) + 1);
  }

  return [num1, num2];
}

export function calculateAnswer(num1, num2, type) {
  return type === "add"
    ? num1 + num2
    : type === "subtract"
    ? num1 - num2
    : type === "multiply"
    ? num1 * num2
    : num1 / num2;
}

export function generateOptions(correctAnswer) {
  const options = new Set();
  const randomIndex = Math.floor(Math.random() * RANDOM_COUNT_NUMBER);
  let i = 0;

  while (options.size < RANDOM_COUNT_NUMBER) {
    if (i === randomIndex) {
      options.add(correctAnswer);
    } else {
      const randomAnswer = correctAnswer + Math.floor(Math.random() * 10) - 5;
      if (randomAnswer !== correctAnswer && randomAnswer >= 0) {
        options.add(randomAnswer);
      }
    }
    i++;
  }

  return Array.from(options);
}
