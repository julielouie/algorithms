function buildPyramid(X) {
  if (X < 1) return 'Please enter a positive number!';
  // buildPyramid(X - 1);
  // console.log('#'.repeat(X));
  const base = 2 * (X - 1) + 1;
  buildPyramid(X - 1);

  const charCount = 2 * (X - 1) + 1;
  const spCount = (base - charCount) / 2;

  console.log('#'.repeat(charCount));
}

// const num = 2;
const num = 5;
// const num = 10;

console.log(buildPyramid(num));
