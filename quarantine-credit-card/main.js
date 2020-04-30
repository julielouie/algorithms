function secure(cardNums) {
  let result = '';

  const numsCheck = /^[0-9]*$/g;
  cardNums = cardNums.replace(/-|\s/g, '');
  if (!(numsCheck).test(cardNums)) return false;

  let maskLength = cardNums.length - 4;
  const last4 = cardNums.slice(maskLength);
  for (let index = 0; index < maskLength; index++) {
    result += cardNums.replace(numsCheck, '*');
  }
  return result += last4;
}

const card1 = '1234567891234567';
 // Output: ************4567

const card2 = '9857 4565 1354 8916';
  // Output: ************8916

const card3 = '9780-2381-4927-4590';
 // Output: ************4590

const invalid = '1234 sdfh 4848 wert';
 // Output: ************4590

console.log(secure(card1));
