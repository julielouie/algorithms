function majorityElement(nums: number[]): number {
  let majorityEl;
  const majoritySize = nums.length / 2;
  const numsMap = {};

  nums.forEach((num) => {
    if (!numsMap[num]) {
      numsMap[num] = 1;
    } else {
      numsMap[num]++;
    }
  });

  const numsMapKeys = Object.keys(numsMap);
  numsMapKeys.forEach((num) => {
    if (numsMap[num] > majoritySize) {
      if (!majorityEl) {
        majorityEl = num;
      } else {
        if (numsMap[num] > numsMap[majorityEl]) {
          majorityEl = num;
        }
      }
    }
  });

  return majorityEl;
}
