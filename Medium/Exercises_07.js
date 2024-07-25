let myArray = ["Tôi", "Yêu", "Việt", "Nam"];
let findadress = "Tôi";
for (let i = 0; i < myArray.length; i++) {
  if (findadress === myArray[i]) {
    console.log(
      `${findadress} nằm ở vị trí thứ ${i + 1} của mảng xét từ trái sang phải!`
    );
    break;
  }
}
