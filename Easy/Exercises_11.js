// Tìm số nhỏ nhất trong mảng

function CheckMin(myArray) {
  let Min = myArray[0];

  for (let i = 1; i < myArray.length; i++) {
    if (Min > myArray[i]) {
      Min = myArray[i];
    }
  }

  return Min;
}

module.exports = {
  exec: CheckMin,
};
