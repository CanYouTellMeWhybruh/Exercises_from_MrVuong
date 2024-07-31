function Sort(arr, Choice) {
  function BubbleSort(arr, ascending = true) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (ascending) {
          if (arr[j] > arr[j + 1]) {
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
          }
        } else {
          if (arr[j] < arr[j + 1]) {
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
          }
        }
      }
    }
    return arr;
  }

  if (Choice === "ascending") {
    return BubbleSort(arr, true);
  } else if (Choice === "descending") {
    return BubbleSort(arr, false);
  } else {
    return "Nhập lệnh cú pháp bị sai!";
  }
}

module.exports = {
  exec: Sort,
};
