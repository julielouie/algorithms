function isLeap(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

const y1 = 2020; //true
// Exactly divided by 4 and not by 100.

const y2 = 1800; //false
// Exactly divided by 4, but is also exactly divided by 100.

const y3 = 2000; //true
// Exactly divided by 400.

const y4 = 2019; //false
// It can't be exactly divided by 400 or by 4.

console.log(isLeap(y4));
