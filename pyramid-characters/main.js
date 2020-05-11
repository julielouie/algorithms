function buildPyramid(X) {
  if (X < 1) return 'Please enter a positive number!';
  // buildPyramid(X - 1);
  // console.log('#'.repeat(X));
  const baseCharCount = 2 * (X - 1) + 1;
  buildPyramid(X - 1);

  const spCount = (baseCharCount) / 2;

  console.log('#'.repeat(baseCharCount));
}

// const num = 2;
const num = 5;
// const num = 10;

console.log(buildPyramid(num));
