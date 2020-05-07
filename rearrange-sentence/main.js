function rearrangeStr(sentence) {
  const strArr = sentence.slice(0, sentence.length - 1).toLowerCase().split(' ');
  strArr.sort((a, b) => {
    let first = a.length;
    let second = b.length;
    return first - second;
  });
  return strArr
}

// const sentence = 'The lines are printed in reverse order.';
  //  'In the are lines order printed reverse'

// const sentence = 'These words are sorta all of sames lengt.'
  //  'Of are all these words sorta sames lengt.'

const sentence = 'What a goof I am today I have no food.'
  //  'A i i am no what goof have food today.'

console.log(rearrangeStr(sentence));
