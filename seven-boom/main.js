function sevenBoom(arr) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == 7) {
      return 'Boom!';
    }
  }
  return 'there is no 7 in the array';
}

const sevenArr = [1, 2, 3, 4, 5, 6, 7];
const noSevenArr = [1, 2, 3, 4, 5, 6, 8];
const sevenArrStr = ['1', '2', '3', '4', '5', '6', '7'];
const noSevenStr = ['1', '2', '3', '4', '5', '6', '8'];

console.log(sevenBoom(noSevenStr));
