function isPalindrome(str) {
  str = str.toLowerCase().split(' ').join('');
  // const halfLen = str.length / 2;
  // for (let index = 0, backInd = str.length - 1;
  //   index <= halfLen, backInd >= halfLen;
  //   index++, backInd--) {
  //   if (str[index] !== str[backInd]) {
  //     return false;
  //   }
  // }
  // return true;
}

// const str = 'noon';
// const str = 'Mom';
// const str = 'Kayak';
// const str = 'racecaR';
const str = 'Was it a cat I saw';
// const str = 'Not a palindrome';

console.log(isPalindrome(str));
