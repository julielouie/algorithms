function isPalindrome(str) {
  str = str.toLowerCase().split(' ').join('');
  console.log(str)
  const halfLen = str.length / 2;
  console.log(halfLen)
  for (let index = 0, backInd = str.length - 1;
    index <= halfLen, halfLen >= backInd;
    index++, backInd--) {
    console.log(str[index], str[backInd]);
    if (str[index] === str[backInd]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

// const str = 'noon';
// const str = 'Mom';
// const str = 'Kayak';
// const str = 'racecaR';
// const str = 'Was it a cat I saw';
const str = 'Not a palindrome';

console.log(isPalindrome(str));
