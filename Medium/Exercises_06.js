let ArrA = [1, 2, 3, 4, 5];
let ArrB = [6, 7, 8, 9, 10];
let Arrtotal = [];
for (let i = 0; i < ArrA.length; i++) {
  Arrtotal[i] = (ArrA[i] / ArrB[i]).toFixed(2);
}
console.log(`Hai mảng sau khi chia là ${Arrtotal}`);
