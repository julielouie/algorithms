function bubbleSort(numsArr) {
  const length = numsArr.length;
  let temp = 0, current = 0, checker = 0;
  for (let outer = 0; outer < length; outer++) {
    current = numsArr[outer];
    for (let inner = 0; inner < length; inner++) {
      checker = numsArr[inner];
      if (current > checker) {
        temp = current;
        numsArr[outer] = checker;
        numsArr[inner] = temp;
      }
    }
  }
  return numsArr;
}

const nums = [8, 4, 3, 2, 5, 7, 1, 98];
// const nums = [45, 48, 13, 19, 27, 65];
// const nums = [85, 495, 65, 78, 26, 0];

console.log(bubbleSort(nums));
