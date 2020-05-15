function makeArrayConsecutive2(statues) {
  const sorted = statues.sort((a, b) => a - b);

  let count = 0;
  let currentVal = sorted[0];

  for (let index = 0; index < sorted.length; index++) {
    const difference = sorted[index] - currentVal;
    if (difference > 1) {
      count += difference - 1;
    }
    currentVal = sorted[index];
  }

  return count;
}

const statues = [6, 2, 3, 8]; // 3
// const statues = [1, 2, 4, 6]; // 2
// const statues = [5, 8, 6, 3, 1, 4, 12]; // 5

console.log(makeArrayConsecutive2(statues));
