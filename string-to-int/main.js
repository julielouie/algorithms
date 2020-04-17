const myAtoi = function (string) {
  let trimmed = string.trim();
  let newStr = '';
  for (let index = 0; index < trimmed.length; index++) {
    let currentIndexNum = +(trimmed[index]);
    if (typeof currentIndexNum === 'number' && !Number.isNaN(currentIndexNum) && trimmed[index] !== ' ') {
      newStr += trimmed[index];
    } else if (trimmed[index] === '-' && (typeof +(trimmed[index + 1])) === 'number') {
      newStr += '-';
    } else {
      continue;
    }
  }
  let isValid = ((+newStr) | 0) == newStr;
  if (isValid) return parseInt(newStr);
  else if (newStr[0] === '-') return -2147483648;
  else return 2147483648;
};

const s1 = "42";
const s2 = "      -42";
const s3 = "4193 with words";
const s4 = "words and 987";
const s5 = "-91283472332";

console.log(myAtoi(s5));
