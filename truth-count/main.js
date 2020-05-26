function countTrue(arr) {
  let count = 0;
  arr.forEach(element => element ? count++ : null);
  return count;
}

const array = [true, false, false, true, false]; // 2
// const array = [false, false, false, false]; // 0
// const array = []; // 0

console.log(countTrue(array));
