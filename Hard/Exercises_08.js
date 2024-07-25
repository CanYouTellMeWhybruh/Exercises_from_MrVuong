const prompt = require("prompt-sync")();
let myMoney = Number(prompt(`Nhập vào số tiền bạn muốn đổi: `));
const money = [500000, 100000, 50000, 10000, 2000, 1000];
let count = 0;
let moneyCount = {
  500000: 0,
  100000: 0,
  50000: 0,
  10000: 0,
  2000: 0,
  1000: 0,
};

for (let i = 0; i < money.length; i++) {
  let numOfCoins = Math.floor(myMoney / money[i]);
  moneyCount[money[i]] = numOfCoins;
  count += numOfCoins;
  myMoney %= money[i];
}

console.log(`Số lượng tiền ít nhất bạn có thể đổi được là ${count} tờ.`);
for (let denom in moneyCount) {
  console.log(`Số tờ ${denom} đồng: ${moneyCount[denom]} tờ.`);
}
