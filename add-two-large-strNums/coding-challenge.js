function convToInt(largeNum1, largeNum2) {
  return (BigInt(largeNum1) + BigInt(largeNum2)).toString();
}

function addTwo(strNum1, strNum2) {
  let result = "";
  let length1 = strNum1.length;
  let length2 = strNum2.length;

  if (length2 > length1) {
    let tempVal = strNum2;
    strNum2 = strNum1;
    strNum1 = tempVal;
  }

  let move = 0;
  let first;
  let second;
  let placeHolder;
  let numSum;

  for (let index = 0; index < strNum1.length; index++) {
    first = parseInt(strNum1.charAt(strNum1.length - 1 - index));
    second = parseInt(strNum2.charAt(strNum2.length - 1 - index));
    second = (second) ? second : 0;

    placeHolder = (move + first + second).toString();
    numSum = placeHolder.charAt(placeHolder.length - 1);

    move = parseInt(placeHolder.substr(0, placeHolder.length - 1));
    move = (move) ? move : 0;

    result = (index === strNum1.length - 1) ? placeHolder + result : numSum + result;
  }

  return result;
}

console.log('firstFunction: ', convToInt('98265812335', '98789878998'));
  // Expected output: 197055691333
  // Output:

console.log('secondFunction: ', addTwo('9858478578', '785456985632'));
  // Expected output: 795315464210
  // Output:
