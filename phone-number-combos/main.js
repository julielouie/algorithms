var letterCombinations = function (digits) {
  digits = digits.split('');
  const chars = [];
  for (let index = 0; index < digits.length; index++) {
    switch (digits[index]) {
      case 2:
        chars.push('abc');
        break;
      case 3:
        chars.push('def');
        break;
      case 4:
        chars.push('ghi');
        break;
      case 5:
        chars.push('jkl');
        break;
      case 6:
        chars.push('mno');
        break;
      case 7:
        chars.push('pqrs');
        break;
      case 8:
        chars.push('tuv');
        break;
      case 9:
        chars.push('wxyz');
        break;
    }
  }

};

const digits = "23";
 // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

console.log(letterCombinations(digits));
