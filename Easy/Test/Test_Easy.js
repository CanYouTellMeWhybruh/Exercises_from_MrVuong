const testEx01 = require("./Test_Exercises_01.js");
const testEx02 = require("./Test_Exercises_02.js");
const testEx03 = require("./Test_Exercises_03.js");
const testEx04 = require("./Test_Exercises_04.js");
const testEx05 = require("./Test_Exercises_05.js");
const testEx06 = require("./Test_Exercises_06.js");
const testEx07 = require("./Test_Exercises_07.js");
const testEx08 = require("./Test_Exercises_08.js");
const testEx09 = require("./Test_Exercises_09.js");
const testEx10 = require("./Test_Exercises_10.js");
const testEx11 = require("./Test_Exercises_11.js");
const testEx12 = require("./Test_Exercises_12.js");
const testEx13 = require("./Test_Exercises_13.js");
const testEx14 = require("./Test_Exercises_14.js");

function runAllTests() {
  console.log("=== Running all tests ===");

  // Gọi các hàm kiểm tra từ các tập tin khác nhau
  testEx01.test();
  testEx02.test();
  testEx03.test();
  testEx04.test();
  testEx05.test();
  testEx06.test();
  testEx07.test();
  testEx08.test();
  testEx09.test();
  testEx10.test();
  testEx11.test();
  testEx12.test();
  testEx13.test();
  testEx14.test();

  console.log("=== All tests completed ===");
}

runAllTests();
