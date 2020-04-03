function getLength(arr) {
  Array.prototype.getLength = function () {
  return this.reduce((totalLength, element) =>
    totalLength + (element.length ? element.getLength() : 1), 0);
  }
  return arr.getLength();
}
