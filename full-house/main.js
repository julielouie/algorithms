function isFullHouse(handArr) {
  let sorted = !handArr.some(isNaN) ? handArr.sort((a, b) => a - b) : handArr.sort();
  const split = [sorted.slice(0, 2), sorted.slice(2, 5)];
  return (new Set(split[0]).size === 1) && (new Set(split[1]).size === 1);
}
