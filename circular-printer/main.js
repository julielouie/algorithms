function calcPrintTime(chars) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const length = alphabet.length;
  let seconds = [];
  for (let index = 0; index < chars.length; index++) {
    const current = chars[index];
    let alphIndex = alphabet.indexOf(current);
    if (alphIndex > (length / 2)) {
      alphIndex = (length - alphIndex) * (-1);
    }
    seconds.push(alphIndex);
  }
  seconds.sort((a, b) => a - b);
  console.log(seconds)

}

const chars = 'BZA';
  // 4 seconds

// const chars = 'ZGB';
  // 13 seconds

// const chars = 'YGSL';
  // 29 seconds

console.log(calcPrintTime(chars));
