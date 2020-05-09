function isNumPalindrome(num) {
  if (num < 0) {
    return;
  } else {
    const numStr = `${num}`;
    for (let index = 0, backInd = numStr.length - 1; index < numStr.length, backInd >= 0; index++, backInd--) {
      if (numStr[index] === numStr[backInd]) {
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
