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

// const nums = [8, 4, 3, 2, 5, 7, 1, 98];
// const nums = [45, 48, 13, 19, 27, 65];
const nums = [85, 495, 65, 78, 26, 0];

console.log(bubbleSort(nums));
