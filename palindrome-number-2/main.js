function isNumPalindrome(num) {
  if (num < 0) {
    return;
  } else {
    const numStr = `${num}`;
    const halfLength = numStr.length / 2;
    for (let index = 0, backInd = numStr.length - 1; index < halfLength, backInd >= halfLength; index++, backInd--) {
      if (numStr[index] === numStr[backInd]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return num;
}
