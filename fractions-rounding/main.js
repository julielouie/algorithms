function fracRound(frac, n) {
  const indexofSlash = frac.indexOf('/');
  const num1 = parseFloat(frac.slice(frac[0], indexofSlash));
  const num2 = parseFloat(frac.slice(indexofSlash, frac.length));
  return (num1 / num2).toFixed(n);
}
