const isValid = function (pString) {
  let symbols = {
    ")": "(",
    "]": "[",
    "}": "{"
  }

  let openingArray = [];

  for (let i = 0; i < pString.length; i++) {
    if (pString[i] === "(" || pString[i] === "[" || pString[i] === "{") {
      openingArray.push(pString[i]);
    }
    else {
      if (openingArray[openingArray.length - 1] === symbols[pString[i]]) {
        openingArray.pop();
      }
      else return false;
    }
  }

  return openingArray.length === 0 ? true : false;
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
const case9 = "(([]){})";
  // true
const case10 = "[({(())}[()])]";
  // true

console.log(isValid(case10));
