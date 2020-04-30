function secure(cardNums) {
  const numsRegEx = RegExp(/^[0-9]*$/g);
}

const card1 = '1234567891234567';
 // Output: ************4567

const card2 = '9857 4565 1354 8916';
  // Output: ************8916

const card3 = '9780-2381-4927-4590';
 // Output: ************4590

const invalid = '1234 sdfh 4848 wert';
 // Output: ************4590
