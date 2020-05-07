function calcPrintTime(chars) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let seconds = 0;
  for (let index = 0; index < chars.length; index++) {
    const letter = chars[index];
    const alphIndex = alphabet.indexOf(letter);

    console.log(alphIndex)


  }


}

const chars = 'BZA';
  // 4 seconds

// const chars = 'ZGB';
  // 13 seconds

// const chars = 'YGSL';
  // 29 seconds

console.log(calcPrintTime(chars));
