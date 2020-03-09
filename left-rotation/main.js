function rotLeft(a, d) {
  const removed = a.splice(0, d);
  const rotated = a.concat(removed);
  return rotated;
}
