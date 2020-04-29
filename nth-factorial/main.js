function calcFactorial(num) {
  let result = num;
  while (num > 1) {
    result *= --num;
  }
  return result;
}

const factorial1 = 5;
 // 120

const factorial2 = 8;
 // 40320

console.log(calcFactorial(factorial2));
