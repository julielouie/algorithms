const removeDuplicates = function (numsArray) {
  let index = 0;
  numsArray.forEach(element => {
    if (element !== numsArray[index]) numsArray[++index] = element;
  });
  return index + 1;
};

const nums1 = [1, 1, 2];
  // length = 2, with the first two elements of nums being 1 and 2 respectively
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  // length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4
const nums3 = [0, 0, 0, 0, 0, 0, 0, 0];
  // length = 1, [0]

console.log(removeDuplicates(nums2));
