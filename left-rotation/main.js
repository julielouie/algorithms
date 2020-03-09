function rotLeft(a, d) {
  const removed = a.splice(0, d);
  return a.concat(removed);
}
