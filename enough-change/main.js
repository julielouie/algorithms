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
