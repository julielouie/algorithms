const searchInsert = function (nums, target) {
  //debugger;
  // const numsSet = new Set(nums);
  // const hasTarget = numsSet.has(target);
  for (let index = 0; index < nums.length; index++) {
    let current = nums[index];
    if (current === target) return index;
    else if (current > target) return index;
    else if (index === nums.length - 1 && target > current) return index + 1;
  }
  return 0;
};

const nums1 = [1, 3, 5, 6];
const target1 = 5;
  // 2

const nums2 = [1, 3, 5, 6];
const target2 = 2;
  // 1

const nums3 = [1, 3, 5, 6];
const target3 = 7;
  // 4

const nums4 = [1, 3, 5, 6];
const target4 = 0;
  // 0

console.log(searchInsert(nums4, target4))
