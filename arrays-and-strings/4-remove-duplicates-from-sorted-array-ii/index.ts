function removeDuplicatesII(nums: number[]): number {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (!numMap[nums[i]]) {
      numMap[nums[i]] = 1;
    } else if (numMap[nums[i]] === 1) {
      numMap[nums[i]] = 2;
    } else {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
}
