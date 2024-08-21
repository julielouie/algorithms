function removeElement(nums: number[], val: number): number {
  const length = nums.length;
  const sameIndices: number[] = [];
  nums.forEach((num, numIndex) => {
    if (num === val) sameIndices.push(numIndex - sameIndices.length);
  });

  sameIndices.forEach((index) => nums.splice(index, 1));

  return length - sameIndices.length;
}
