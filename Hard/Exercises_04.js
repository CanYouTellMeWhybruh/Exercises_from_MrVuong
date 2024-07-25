let myFirstArray = [3, 1, 4, 6, 3, 7, 8];
let mySecondArray = [12, 22, 32, 42, 52, 62, 77];

function decrease(Arr) {
  let tmp;
  for (let i = 0; i < Arr.length; i++) {
    for (let j = i + 1; j < Arr.length; j++) {
      if (Arr[j] > Arr[i]) {
        tmp = Arr[i];
        Arr[i] = Arr[j];
        Arr[j] = tmp;
      }
    }
  }
  return Arr;
}

function decrease2Arr(Arr1, Arr2) {
  let i = 0,
    j = 0;
  let finalArr = [];
  while (i < Arr1.length && j < Arr2.length) {
    if (Arr1[i] > Arr2[j]) {
      finalArr.push(Arr1[i]);
      i++;
    } else {
      finalArr.push(Arr2[j]);
      j++;
    }
  }
  while (i < Arr1.length) {
    finalArr.push(Arr1[i]);
    i++;
  }
  //Thêm các phần tử còn lại
  while (j < Arr2.length) {
    finalArr.push(Arr2[j]);
    j++;
  }

  return finalArr;
}

console.log(decrease2Arr(decrease(myFirstArray), decrease(mySecondArray)));
