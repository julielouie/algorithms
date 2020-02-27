function countingValleys(n, s) {
  let valleys = 0;
  let stepCount = 0;
  const steps = [];
  const strArray = s.split('');
  strArray.forEach(element => {
    switch (element) {
      case 'U':
        steps.push(1);
        break;
      case 'D':
        steps.push(-1);
        break;
    }
  });
  for (let index = 0; index < steps.length; index++) {
    stepCount += steps[index];
    if (steps[index] === 1 && stepCount === 0) {
      valleys++;
    }
  }
  return valleys;
}

const nEx = 8;
const strEx = 'UDDDUDUU';

console.log(countingValleys(nEx, strEx));
