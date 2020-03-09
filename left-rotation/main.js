function rotLeft(a, d) {
  const removed = a.splice(0, d);
  const rotated = a.concat(removed);
  return rotated;
}

const array = [1, 2, 3, 4, 5];
const rotations = 4;

console.log(rotLeft(array, rotations));
