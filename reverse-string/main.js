function reverseString(str) {
  let reversed = '';
  (str.split('')).forEach(character => reversed = character + reversed);
  return reversed;
}

const str = '.uoy fo lla naht ynapmoc retteb a ekam nac I .ynapmoc siht ta OEC eht eb ot evresed I';

console.log(reverseString(str));
