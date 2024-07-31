// Tính tổng số lẻ trong mảng
function totalOdd(myArray) {
  let total = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 != 0) {
      total += myArray[i];
    }
  }
  return total;
}
module.exports = {
  exec: totalOdd,
};
