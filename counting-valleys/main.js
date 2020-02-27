function countingValleys(n, s) {
  const stepCount = [];
  for (let index = 0; index < s.length; index++) {
    let character = s[index];
    switch (character) {
      case 'U':
        stepCount.push(1);
        break;
      case 'D':
        stepCount.push(-1);
        break;
    }
  }
  console.log(stepCount);
}

const nEx = 8;
const strEx = 'UDDDUDUU';

countingValleys(nEx, strEx);
