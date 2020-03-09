function rotLeft(a, d) {
  const removed = a.splice(0, d);
  a.concat(removed);
  return a;
}

const array = [1, 2, 3, 4, 5];
const rotations = 4;

console.log(rotLeft(array, rotations));
