// Tìm số dư của a chia b không dùng %

function surplus(a, b) {
  let remain = 0;
  while (true) {
    if (a >= b) {
      a -= b;
    } else {
      remain = a;
      break;
    }
  }

  return remain;
}

module.exports = {
  exec: surplus,
};
