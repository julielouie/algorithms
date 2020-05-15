function makeArrayConsecutive2(statues) {
  const sorted = statues.sort((a, b) => a - b);

  let count = 0;
  let currentVal = sorted[0];

}

const statues = [6, 2, 3, 8]; // 3
// const statues = [1, 2, 4, 6]; // 2
// const statues = [5, 8, 6, 3, 1, 4, 12]; // 6

console.log(makeArrayConsecutive2(statues));
