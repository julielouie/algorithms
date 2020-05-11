function nearestPalindrome(num) {
  let i = num;
  let j = num;
  while (i != i.toString().split("").reverse().join("")) {
    i++;
  }
  while (j != j.toString().split("").reverse().join("")) {
    j--;
  }
  return Math.abs(num - i) >= Math.abs(num - j) ? j : i;
}
