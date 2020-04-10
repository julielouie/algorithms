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
