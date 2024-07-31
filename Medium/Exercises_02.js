function MergeArrays(ArrA, ArrB) {
  for (let i = 0; i < ArrB.length; i++) {
    ArrA.push(ArrB[i]);
  }
  return ArrA;
}

module.exports = {
  exec: MergeArrays,
};
