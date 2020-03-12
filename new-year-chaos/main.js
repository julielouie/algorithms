function minimumbribeCount(q) {
  let bribes = 0;
  let minNumber = q.length;
  for (let index = q.length - 1; index >= 0; index--) {
    if (q[index] - index > 3) {
      return `Too chaotic`;
    }
    if (q[index] > index + 1) {
      bribes += (q[index] - (index + 1));
    } else {
      if (minNumber > q[index]) {
        minNumber = q[index];
      } else if (q[index] != minNumber) {
        bribes++;
      }
    }
  }
  return bribes;
}
