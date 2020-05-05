function printFrame(width, height, character) {
  if (width < 3 || height < 3) return 'Please provide larger dimensions!';

  const frame = [];


  function createOuter(num, str) {
    let outerBracket = '';
    for (let index = 0; index < num; index++) {
      outerBracket += str;
    }
    return [outerBracket];
  }

  function createInner(num, str) {
    let innerBracket = '';
    for (let index = 0; index < num; index++) {
      if (index === 0 || index === num - 1) {
        innerBracket += str;
      } else {
        innerBracket += ' ';
      }
    }
    return [innerBracket];
  }

}

const width = 10;
const heigth = 10;
const character = '#';

// const width = 4;
// const heigth = 5;
// const character = 'X';

// const width = 2;
// const heigth = 3;
// const character = '$';

console.log(printFrame(width, heigth, character));
