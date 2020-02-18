function sevenBoom(arr) {
  for (let index = 0; index < arr.length; index++) {
    const numSplit = arr[index].toString().split('');
    for (let innerIndex = 0; innerIndex < numSplit.length; innerIndex++) {
      if (numSplit[innerIndex] === '7') {
        return 'Boom!';
      }
    }
  }
  return 'there is no 7 in the array';
}
