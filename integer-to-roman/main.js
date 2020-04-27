const intToRoman = function (num) {
  const map = { M: 1000, D: 900, C: 100, L: 50, X: 10, V: 5, I: 1 };
  return Object.entries(map).reduce((result, [romanInt, number]) => {
    result = romanInt.repeat(Math.floor(num / number));
    num %= number;
    return result;
  }, '');

};

const num1 = 3;
const num2 = 4;
const num3 = 9;
const num4 = 58;
const num5 = 1996;

console.log(intToRoman(num2));
