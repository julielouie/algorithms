function sevenBoom(arr) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == 7) {
      return 'Boom!';
    }
  }
  return 'there is no 7 in the array';
}
