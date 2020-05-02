function calcChange(total, change) {
  change[0] *= 0.01;
  change[1] *= 0.05;
  change[2] *= 0.10;
  change[3] *= 0.25;
  let totalChange = change.reduce((acc, curr) => {
    return acc + (+curr);
  }, 0);
  totalChange = parseFloat(totalChange.toFixed(2));
  if (total <= totalChange) return true;
  return false;
}

const total1 = 34.51;
const change1 = [1, 2, 3, 4];
  // Output: false



const total2 = 2.45;
const change2 = [1, 5, 2, 10];
  // Output: true

console.log(calcChange(total1, change1));
