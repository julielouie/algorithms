function bubbleSort(numsArr) {
  const length = numsArr.length;
  let temp = null;
  for (let outer = 0; outer < length; outer++) {
    for (let inner = 0; inner < length; inner++) {
      if (numsArr[inner] > numsArr[inner + 1]) {
        temp = numsArr[inner];
        numsArr[inner] = numsArr[inner + 1];
        numsArr[inner + 1] = temp;
      }
    }
  }
  return numsArr;
}
