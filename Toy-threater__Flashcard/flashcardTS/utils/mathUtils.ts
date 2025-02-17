import { RANDOM_COUNT_NUMBER, RANGE_MAX_NUMBER } from "./constants";

export function generateNumbers(type: string): [number, number] {
  let num1 = Math.floor(Math.random() * RANGE_MAX_NUMBER) + 1;
  let num2 = Math.floor(Math.random() * RANGE_MAX_NUMBER) + 1;

  if (type === "subtract" && num1 < num2) {
    [num1, num2] = [num2, num1];
  } else if (type === "divide") {
    num1 = num2 * (Math.floor(Math.random() * RANGE_MAX_NUMBER) + 1);
  }

  return [num1, num2];
}

export function calculateAnswer(num1: number, num2: number, type: string): number {
  switch (type) {
    case "add": return num1 + num2;
    case "subtract": return num1 - num2;
    case "multiply": return num1 * num2;
    case "divide": return num1 / num2;
    default: return 0;
  }
}

export function generateOptions(correctAnswer: number): number[] {
  const options = new Set<number>();
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
