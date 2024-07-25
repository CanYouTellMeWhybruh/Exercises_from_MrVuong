// const prompt = require("prompt-sync")();
// console.log("Nhập lựa chọn (ascending/descending):");
// let Choice = prompt().trim();
// let myArray = [1, 2, 5, 3, 6, 7, 4];
function Sort(arr, Choice) {
  function BubbleSort(arr, ascending = true) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (ascending) {
          if (arr[j] > arr[j + 1]) {
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
          }
        } else {
          if (arr[j] < arr[j + 1]) {
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
          }
        }
      }
    }
    return arr;
  }

  if (Choice === "ascending") {
    return BubbleSort(arr, true);
  } else if (Choice === "descending") {
    return BubbleSort(arr, false);
  } else {
    return "Nhập lệnh cú pháp bị sai!";
  }
}

const testCases = [
  {
    Array: [3, 5, 6, 7, 2, 1, 3],
    Choice: "LOL",
    expected: "Nhập lệnh cú pháp bị sai!",
  },
  {
    Array: [0, 11, 15, 12, 14, 3, 17],
    Choice: "Descending",
    expected: "Nhập lệnh cú pháp bị sai!",
  },
  {
    Array: [3, 9, 5, 7, 1, 6, 4, 8, 2, 0, 11, 13, 15, 10, 14, 12, 16],
    Choice: "ascending",
    expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
  {
    Array: [14, 1, 8, 0, 10, 5, 7, 2, 9, 11, 12, 13],
    Choice: "ascending",
    expected: [0, 1, 2, 5, 7, 8, 9, 10, 11, 12, 13, 14],
  },
  {
    Array: [6, 3, 11, 15, 10, 1, 5, 12, 8, 7, 0, 4, 9],
    Choice: "ascending",
    expected: [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15],
  },
  {
    Array: [4, 7, 13, 1, 6, 9, 5, 8, 2, 3, 10, 11, 14],
    Choice: "ascending",
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14],
  },
  {
    Array: [9, 4, 12, 2, 8, 11, 3, 5, 6, 1, 7, 10, 0, 13, 14, 15],
    Choice: "descending",
    expected: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  },
  {
    Array: [11, 8, 1, 9, 0, 7, 4, 5, 10, 6, 2, 3, 14, 12, 13],
    Choice: "descending",
    expected: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  },
  {
    Array: [10, 3, 6, 15, 1, 8, 2, 4, 11, 7, 0, 9, 5, 12, 13],
    Choice: "descending",
    expected: [15, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  },
  {
    Array: [2, 11, 7, 10, 9, 3, 4, 0, 5, 8, 12, 6, 1, 13, 14],
    Choice: "descending",
    expected: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  },
];

function testSortArray() {
  testCases.forEach((testCase, index) => {
    const { Array, Choice, expected } = testCase;
    const result = Sort([...Array], Choice); // using spread operator to avoid mutation
    const isPassed = JSON.stringify(result) === JSON.stringify(expected);
    console.log(`Test case ${index + 1}: ${isPassed ? "PASS" : "FAIL"}.`);
  });
}

testSortArray();
