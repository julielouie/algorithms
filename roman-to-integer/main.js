const romanToInt = function (s) {
  let result = 0, num = 0;
  for (let index = 0; index < s.length; index++) {
    if (s[index] === 'I') {
      if (s[index + 1] === 'V') {
        num = 4;
        index++;
      } else if (s[index + 1] === 'X') {
        num = 9;
        index++
      } else {
        num = 1;
      }
    } else if (s[index] === 'V') {
      num = 5;
    } else if (s[index] === 'X') {
      if (s[index + 1] === 'L') {
        num = 40;
        index++;
      } else if (s[index + 1] === 'C') {
        num = 90;
        index++;
      } else {
        num = 10;
      }
    } else if (s[index + 1] === 'L') {
      num = 50;
    } else if (s[index] === 'C') {
      if (s[index + 1] === 'D') {
        num = 400;
        index++;
      } else if (s[index + 1] === 'M') {
        num = 900;
        index++;
      } else {
        num = 100;
      }
    result += num;
  }
  return result;
};
