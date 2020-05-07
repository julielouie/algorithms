function rearrangeStr(sentence) {
  const strArr = sentence.slice(0, sentence.length - 1).toLowerCase().split(' ');
  strArr.sort((a, b) => a.length - b.length);

  const regex = RegExp(/^[A-Z][a-z]*\.$/g);
  let test = strArr.join('') + '.';
  test = test[0].toUpperCase() + test.slice(1);

  if (regex.test(test)) {
    let result = strArr.join(' ') + '.';
    return result[0].toUpperCase() + result.slice(1);
  }
}

const sentence = 'The lines are printed in reverse order.';
  //  'In the are lines order printed reverse.'

// const sentence = 'These words are sorta all of sames lengt.'
  //  'Of are all these words sorta sames lengt.'

// const sentence = 'What a goof I am today I have no food.'
  //  'A i i am no what goof have food today.'

console.log(rearrangeStr(sentence));
