let myString = "Mr.Toi";
let myString2 = ["Toi", "Toighethack", "ToiyeuVN", "VNvodich", "Mr.Toi"];
let count = 0;
for (let i = 0; i < myString.length; i++) {
  if (myString2[i] === myString) {
    count += 1;
  }
}
console.log(`Tổng số lần xuất hiện của ${myString} trong mảng là ${count}.`);
