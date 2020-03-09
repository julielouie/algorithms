function hourglassSum(arr) {
  const totals = [];
  for (let outerIndex = 0; outerIndex < 4; outerIndex++) {
    for (let innerIndex = 0; innerIndex < 4; innerIndex++) {
      let result = 0;
      result += arr[outerIndex][innerIndex];
      result += arr[outerIndex][innerIndex + 1];
      result += arr[outerIndex][innerIndex + 2];
      result += arr[outerIndex + 1][innerIndex + 1];
      result += arr[outerIndex + 2][innerIndex];
      result += arr[outerIndex + 2][innerIndex + 1];
      result += arr[outerIndex + 2][innerIndex + 2];
      totals.push(result);
    }
  }
  totals.sort((a, b) => a - b);
  return totals[totals.length - 1];
}
