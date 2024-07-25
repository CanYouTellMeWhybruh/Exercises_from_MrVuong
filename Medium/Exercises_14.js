let mySalary = [25, 57, 68, 15]; //Thu nhập theo từng tháng
function calculateTax() {
  let totalTax = 0;
  for (let i = 0; i < mySalary.length; i++) {
    if (mySalary[i] > 50) {
      totalTax += mySalary[i] * 0.2;
    } else if (mySalary[i] < 50 && mySalary[i] > 20) {
      totalTax += mySalary[i] * 0.1;
    } else if (mySalary[i] < 20) {
      totalTax += mySalary[i] * 0.05;
    } else {
      continue;
    }
  }
  console.log(`Tổng thuế phải nộp là ${totalTax.toFixed(2)} triệu vnd`);
}
calculateTax();
