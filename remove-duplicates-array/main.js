const removeDuplicates = function (numsArray) {
  for (let index = 0; index < numsArray.length; index++) {
    numsArray.forEach((elem, ind) => {
      if (numsArray[index] === elem && index !== ind) numsArray.splice(ind, 1);
      });
  }

  return numsArray;
};

const nums1 = [1, 1, 2];
  // length = 2, with the first two elements of nums being 1 and 2 respectively
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  // length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4
const nums3 = [0, 0, 0, 0, 0, 0, 0, 0];
  // length = 1, [0]

console.log(removeDuplicates(nums3));
