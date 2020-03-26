function shapeArea(n) {
  if (n === 1) {
    return n;
  }
  let newN = n;
  for (let index = 1; index < n; index++) {
    newN += (4 * index) - 1;
  }
  return newN;
}
