const searchInsert = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    let current = nums[index];
    if (current === target) return index;
    else if (current > target) return index;
    else if (index === nums.length - 1 && target > current) return index + 1;
  }
  return 0;
};
