function oddishOrEvenish(num) {
  const numArray = num.toString().split('');
  let currentNum = 0;
  for (let index = 0; index < numArray.length; index++) {
    currentNum += parseInt(numArray[index]);
  }
  if (currentNum % 2 === 1) {
    return 'Oddish';
  } else {
    return 'Evenish';
  }
}

const num1 = 43;
const num2 = 373;
const num3 = 4433;

console.log(oddishOrEvenish(num3));
