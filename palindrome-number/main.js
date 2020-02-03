const isPalindrome = function (x) {
  const strX = x.toString();
  if (x < 0) {
    return false;
  } else {
    for (let index = 0, backInd = strX.length - 1;
      index <= strX.length/2, backInd >= strX.length/2;
      index++, backInd--) {

    }
  }
  return true;
};
