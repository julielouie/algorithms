function isNumPalindrome(num) {
  if (num < 0) {
    return;
  } else {
    const numStr = `${num}`;
    const halfLength = numStr.length / 2;
    let firstHalf = '';
    for (let index = 0, backInd = numStr.length - 1; index <= halfLength, backInd >= halfLength; index++, backInd--) {
      if (numStr[index] === numStr[backInd]) {
        firstHalf += numStr[index];
        continue;
      } else {

      }
    }
  }
  return num;
}

const num = 121;

// const num = 199;

// const num = 15;

console.log(isNumPalindrome(num));
