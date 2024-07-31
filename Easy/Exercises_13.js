// Đảo ngược thứ tự mảng số

function reverseArray(myArray) {
  let reversedArray = [];

  for (let i = myArray.length - 1; i >= 0; i--) {
    reversedArray.push(myArray[i]);
  }

  return reversedArray;
}

module.exports = {
  exec: reverseArray,
};
