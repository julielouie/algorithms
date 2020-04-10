const isValid = function (pString) {
  let symbol = '';
  let first = '';
  let last = '';
  let middle = 0;
debugger;
  while (pString) {
    first = pString[0];

    switch (first) {
      case '(':
        symbol = ')';
        break;
      case '[':
        symbol = ']';
        break;
      case '{':
        symbol = '}';
        break;
      default:
        return false;
    }

    last = pString.lastIndexOf(symbol);
    if (last === -1) return false;

    middle = last - 1;
    if (!middle) {
      pString = pString.slice(last + 1);
      continue;
    } else if (middle % 2 !== 0) {
      return false;
    } else {
      const currentPiece = pString.slice(1, last);
      if (currentPiece.includes(symbol)) {
        last = pString.indexOf(symbol);
        pString = pString.slice(last + 1);
        continue;
      }
      pString = pString.slice(1, last);
    }
  }

  return true;
};


const case1 = "()";
  // true
const case2 = "()[]{}";
  // true
const case3 = "(]";
  // false
const case4 = "([)]";
  // false
const case5 = "{[]}";
  // true
const case6 = "[])";
  // false
const case7 = "{}{}()[]";
  // true
const case8 = "{{)}";
  // false

console.log(isValid(case8));
