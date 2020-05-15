function makeArrayConsecutive2(statues) {
  const sorted = statues.sort((a, b) => a - b);

  let count = 0;
  let currentVal = sorted[0];

  sorted.forEach(statue => {
    const difference = statue - currentVal;
    if (difference > 1) {
      count += difference - 1;
    }
    currentVal = statue;
  });

  return count;
}
