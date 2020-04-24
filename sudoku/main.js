function sudoku2(grid) {

  for (let outer = 0; outer < grid.length; outer++) {
    const currentHorizontal = grid[outer];
    if (checkArray(currentHorizontal)) {
      continue;
    } else {
      return false;
    }
  }

  for (let outerVert = 0; outerVert < grid.length; outerVert++) {
    let vertIndex = 0;
    let currentVertical = calculateVertical(outerVert, vertIndex++, 9);
    if (currentVertical) {
      continue;
    } else {
      return false;
    }
  }

  function addArray(arrayToAdd) {
    const added = arrayToAdd.reduce((acc, curr) => {
      let current = +curr;
      if (!isNaN(current)) {
        return acc + (current);
      } else {
        return acc;
      }
    }, 0);
    return added;
  }

  function checkArray(arrayToCheck) {
    const noDuplicates = [...new Set(arrayToCheck)];

    const currentArray = addArray(arrayToCheck);
    const currentSet = addArray(noDuplicates);
    if (currentArray !== currentSet) return false;
    else return true;
  }

  function calculateVertical(arrayToCalc, vertIndex, count) {
    let vertical = [];

    while (count > 0) {
      vertical.push(grid[arrayToCalc++][vertIndex]);
      count--;
    }

    return checkArray(vertical);
  }

  return true;
}

const grid1 = [
  ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
  ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
  ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
  ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
  ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '7', '.']
  ];

const grid2 = [
  ['.', '.', '.', '.', '2', '.', '.', '9', '.'],
  ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
  ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
  ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
  ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
  ['.', '2', '.', '.', '3', '.', '.', '.', '.']
  ];

console.log(sudoku2(grid1));
