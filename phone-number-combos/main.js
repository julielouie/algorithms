var letterCombinations = function (digits) {
  digits = digits.split('');
  const chars = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  // for (let index = 0; index < digits.length; index++) {

  // }
  console.log(chars)

};

const digits = "23";
 // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

console.log(letterCombinations(digits));
