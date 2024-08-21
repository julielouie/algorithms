function rotate(nums: number[], k: number): void {
  if (!k) return;

  for (let i = 0; i < k; i++) {
    const movingNum = nums.pop();
    nums.unshift(movingNum as number);
  }
}

// OR

function rotate2(nums: number[], k: number): void {
  const newK = k % nums.length;
  if (newK !== 0) {
    let temp = nums.slice(-newK).concat(nums.slice(0, -newK));
    for (let i = 0; i < nums.length; i++) {
      nums[i] = temp[i];
    }
  }
}
