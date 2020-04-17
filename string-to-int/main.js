const myAtoi = function (string) {
  let index = 0;
  let result = 0;
  let isNegative = false;

  while (string[index] === ' ') {
    index++;
  }

  const sign = string[index];
  if (sign === '+' || sign === '-') {
    isNegative = sign === '-';
    index++;
  }

  for (; index < string.length; index++) {
    const code = string.charCodeAt(index) - 48;
    if (code < 0 || code > 9) {
      break;
    }
    result *= 10;
    result += code;
  }

  if (isNegative) {
    result = -result;
  }

  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, result));
};

const s1 = "42";
const s2 = "      -42";
const s3 = "4193 with words";
const s4 = "words and 987";
const s5 = "-91283472332";
const s6 = "3.14159";

console.log(myAtoi(s6));
