// Kiểm tra a b cùng chẵn cùng lẻ

function Check(arr) {
  let a = arr[0];
  let b = arr[1];
  if ((a % 2 == 0 && b % 2 == 0) || (a % 2 != 0 && b % 2 != 0)) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  exec: Check,
};
