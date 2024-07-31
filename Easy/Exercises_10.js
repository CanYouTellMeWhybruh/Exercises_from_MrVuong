// Tìm số lớn nhất trong mảng

function checkMax(myArray) {
  let Max = myArray[0];

  for (let i = 1; i < myArray.length; i++) {
    if (Max < myArray[i]) {
      Max = myArray[i];
    }
  }

  return Max;
}

module.exports = {
  exec: checkMax,
};
