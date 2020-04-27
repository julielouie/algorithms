const intToRoman = function (num) {
  const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
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
