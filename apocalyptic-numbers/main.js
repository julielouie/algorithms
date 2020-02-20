function apocalyptic(n) {
  const exp = Math.pow(2, n) + '';
  for (let index = 0; index < exp.length; index++) {
    if (exp[index] === '6' && exp[index + 1] === '6' && exp[index + 2] === '6') {
      return `Repent! ${index} days until the Apocalypse!`;
    }
  }
  return 'Crisis averted. Resume sinning.';
}

console.log(apocalyptic(157));
