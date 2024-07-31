// Đếm số lượng số lẻ trong mảng

function countOdd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count += 1;
    }
  }
  return count;
}

module.exports = {
  exec: countOdd,
};
