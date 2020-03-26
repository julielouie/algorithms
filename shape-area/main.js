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

const n1 = 1;

const n2 = 2;

const n3 = 3;

const n4 = 4;

console.log(shapeArea(n4));
