const removeElement = function (nums, val) {
  nums.forEach((element, index) => {
    if (element === val) nums.splice(index, 1);
  })
  return nums;
};

const nums1 = [3, 2, 2, 3];
const val1 = 3;

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
const val2 = 2;

console.log(removeElement(nums2, val2));
