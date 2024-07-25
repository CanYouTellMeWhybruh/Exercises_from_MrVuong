// let myMoney = Number(prompt(`Nhập vào số tiền của bạn: `));
function numberToWords(num) {
  const ones = [
    "",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
  ];
  const tens = [
    "",
    "mười",
    "hai mươi",
    "ba mươi",
    "bốn mươi",
    "năm mươi",
    "sáu mươi",
    "bảy mươi",
    "tám mươi",
    "chín mươi",
  ];
  const hundreds = [
    "",
    "một trăm",
    "hai trăm",
    "ba trăm",
    "bốn trăm",
    "năm trăm",
    "sáu trăm",
    "bảy trăm",
    "tám trăm",
    "chín trăm",
  ];
  const units = ["", "nghìn", "triệu", "tỷ"];

  if (num === 0) return "không";

  let result = "";
  let unitIndex = 0;

  while (num > 0) {
    let part = num % 1000;
    if (part > 0) {
      let partStr = convertHundreds(part);
      if (unitIndex > 0) {
        partStr += " " + units[unitIndex];
      }
      result = partStr + (result ? " " + result : "");
    }
    num = Math.floor(num / 1000);
    unitIndex++;
  }

  return result.trim();
}

function convertHundreds(num) {
  const ones = [
    "",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
  ];
  const tens = [
    "",
    "mười",
    "hai mươi",
    "ba mươi",
    "bốn mươi",
    "năm mươi",
    "sáu mươi",
    "bảy mươi",
    "tám mươi",
    "chín mươi",
  ];
  const hundreds = [
    "",
    "một trăm",
    "hai trăm",
    "ba trăm",
    "bốn trăm",
    "năm trăm",
    "sáu trăm",
    "bảy trăm",
    "tám trăm",
    "chín trăm",
  ];

  let hundred = Math.floor(num / 100);
  let ten = Math.floor((num % 100) / 10);
  let one = num % 10;

  let result = hundreds[hundred];

  if (ten > 0 || one > 0) {
    result += (result ? " " : "") + (ten > 1 ? tens[ten] : "mười");
    if (ten === 1 && one > 0) {
      result += " " + (one === 5 ? "lăm" : ones[one]);
    } else if (ten > 1 && one > 0) {
      result += " " + (one === 1 ? "mốt" : one === 5 ? "lăm" : ones[one]);
    } else if (one > 0) {
      result += " " + ones[one];
    }
  } else if (one === 0 && ten > 0) {
    result += " " + "linh";
  }

  return result;
}

console.log(numberToWords(777777) + " Viet Nam Dong");
