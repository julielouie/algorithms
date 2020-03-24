function apocalyptic(n) {
  const exp = BigInt(Math.pow(2, n)).toString()
  for (let index = 0; index < exp.length; index++) {
    if (exp[index] === '6' && exp[index + 1] === '6' && exp[index + 2] === '6') {
      return `Repent! ${index} days until the Apocalypse!`;
    }
  }
  return 'Crisis averted. Resume sinning.';
}


const num1 = 109;

const num2 = 157;

const num3 = 499;

const num4 = 666;

console.log(apocalyptic(num2));
