function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums2.forEach((num, numIndex) => (nums1[m + numIndex] = num));
  nums1.sort((a, b) => a - b);
}
