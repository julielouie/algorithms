function buildPyramid(X) {
  if (X < 1) return 'Please enter a positive number!';
  // buildPyramid(X - 1);
  // console.log('#'.repeat(X));
  const base = 2 * (X - 1) + 1;
  console.log(base)
  buildPyramid(X - 1);

  const xCount = 2 * (X - 1) + 1;
  const spCount = (base - xCount) / 2;

  return console.log(' '.repeat(spCount) + '#'.repeat(xCount));
}

// const num = 2;
// const num = 5;
const num = 10;

console.log(buildPyramid(num));
