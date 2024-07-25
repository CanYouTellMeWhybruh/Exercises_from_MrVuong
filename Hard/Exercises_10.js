function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function shuffleArray(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let j = i + Math.floor(Math.random() * (n - i));
    swap(arr, i, j);
  }
}

let myArr = [1, 2, 3, 4, 5, 6, 7];
shuffleArray(myArr);

console.log(myArr);
