function printFrame(width, height, character) {
  if (width < 3 || height < 3) return 'Please provide larger dimensions!';

  const frame = [];

  function createOuter(num, str) {
    let outerBracket = '';
    for (let outerIndex = 0; outerIndex < num; outerIndex++) {
      outerBracket += str;
    }
    return [outerBracket];
  }

  function createInner(num, str) {
    let innerBracket = '';
    for (let innerIndex = 0; innerIndex < num; innerIndex++) {
      if (innerIndex === 0 || innerIndex === num - 1) {
        innerBracket += str;
      } else {
        innerBracket += ' ';
      }
    }
    return [innerBracket];
  }

  for (let vertIndex = 0; vertIndex < height; vertIndex++) {
    if (vertIndex === 0 || vertIndex === height - 1) {
      frame.push(createOuter(width, character));
    } else {
      frame.push(createInner(width, character));
    }
  }

  return frame;
}

const width = 10;
const heigth = 10;
const character = '*';

// const width = 4;
// const heigth = 5;
// const character = 'X';

// const width = 2;
// const heigth = 3;
// const character = '$';

console.log(printFrame(width, heigth, character));
