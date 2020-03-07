function oddishOrEvenish(num) {
  const numArray = num.toString().split('');
  let currentNum = 0;
  for (let index = 0; index < numArray; index++) {
    currentNum += parseInt(numArray[index]);
  }
  if (currentNum % 2 === 1) {
    return 'Oddish';
  } else {
    return 'Evenish';
  }
}
