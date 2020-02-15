function fracRound(frac, n) {
  const indexofSlash = frac.indexOf('/');
  const num1 = frac.slice(0, indexofSlash);
  const num2 = frac.slice(indexofSlash + 1);
  // return (num1 / num2).toFixed(n);
}

console.log(fracRound("1/3", 5));
