function calcFactorial(num) {
  let result = num;
  while (num > 1) {
    result *= --num;
  }
  return result;
}
