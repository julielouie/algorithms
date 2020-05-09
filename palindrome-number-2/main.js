function isNumPalindrome(num) {
  if (num < 0) {
    return;
  }
  const numStr = `${num}`;
  const halfLength = numStr.length / 2;
  let firstHalf = '';
  let backHalf = '';
  for (let index = 0, backInd = numStr.length - 1; index <= halfLength, backInd >= halfLength; index++, backInd--) {
    firstHalf += numStr[index];
    backHalf += numStr[backInd];
  }
  const lowerPal = firstHalf + firstHalf.split().reverse().join('');
  const upperPal = backHalf + backHalf.split().reverse().join('');
  if (numStr === lowerPal) {
    return num;
  } else if (parseInt(lowerPal) < num && parseInt(upperPal) > num) {
    return parseInt(lowerPal);
  }
}

// const num = 121;

const num = 199;

// const num = 15;

console.log(isNumPalindrome(num));
