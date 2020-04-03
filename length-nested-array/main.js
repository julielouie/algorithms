function getLength(arr) {
  Array.prototype.getLength = function () {
  return this.reduce((totalLength, element) =>
    totalLength + (element.length ? element.getLength() : 1), 0);
  }
  return arr.getLength();
}


const a1 = [1, [2, 3]];

const a2 = [1, [2, [3, 4]]];

const a3 = [1, [2, [3, [4, [5, 6]]]]];

const a4 = [1, [2], 1, [2], 1];

console.log(getLength(a1));
