function countTrue(arr) {
  let count = 0;
  arr.forEach(element => element ? count++ : null);
  return count;
}
