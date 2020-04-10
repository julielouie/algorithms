const isValid = function (pString) {
  let symbol = '';
  let first = '';
  let last = '';
  let middle = 0;

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
    middle = last - 1;

    if (!middle) return true;
    if (middle % 2 !== 0) {
      return false;
    } else {
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

console.log(isValid(case1));
