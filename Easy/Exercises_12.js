// Tính giá trị trung bình trong mảng
const myArray = [3, 6, 9, 12, 15, 18];
function averageCalculation(myArray) {
  let total = 0;
  let mean;

  for (let i = 0; i < myArray.length; i++) {
    total += myArray[i];
  }

  mean = Math.floor(total / myArray.length);

  return mean;
}
console.log(`${averageCalculation(myArray)}.`);
module.exports = {
  exec: averageCalculation,
};
