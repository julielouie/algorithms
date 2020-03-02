function repeatedString(s, n) {
  const aString = s.split("").filter(element => element === 'a').length;
  const occurrences = parseInt(n / s.length);
  const remaining = n % s.length;

  const aTotal = occurrences * aString + s.slice(0, remaining).split("").filter(element => element === 'a').length;

  return aTotal;
}
