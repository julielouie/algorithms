function secure(cardNums) {
  let result = '';

  const numsCheck = /^[0-9]*$/g;
  cardNums = cardNums.replace(/-|\s/g, '');
  if (!(numsCheck).test(cardNums)) return 'Please enter a valid card number';

  let maskLength = cardNums.length - 4;
  const last4 = cardNums.slice(maskLength);
  for (let index = 0; index < maskLength; index++) {
    result += cardNums.replace(numsCheck, '*');
  }
  return result += last4;
}
