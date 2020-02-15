function fracRound(frac, n) {
  const indexofSlash = frac.indexOf('/');
  const num1 = parseFloat(frac.slice(0, indexofSlash));
  const num2 = parseFloat(frac.slice(indexofSlash + 1));
  const result = (num1 / num2).toFixed(n);
  return `${frac} rounded to ${n} decimal places is ${result}`;
}

console.log(fracRound("2/8", 5));
