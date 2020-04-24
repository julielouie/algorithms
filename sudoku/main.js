function sudoku2(grid) {
  const length = grid.length;

  for (let outer = 0; outer < length; outer++) {
    const currentHorizontal = grid[outer];
    if (checkArray(currentHorizontal)) {
      continue;
    } else {
      return false;
    }
  }

  for (let outerVert = 0; outerVert < length; outerVert++) {
    let currentVertical = calculateVertical(outerVert, outerVert, 9);
    if (currentVertical) {
      continue;
    } else {
      return false;
    }
  }

  let subgridCount = 0;
  for (let outerFor3 = 0; outerFor3 < length;) {
    let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expected = addArray(expected);

    let arrayOf3 = [];
    let subgrid = 9;
    let count = 0;

    while (subgrid > 0) {
      arrayOf3.push(grid[outerFor3][count]);
      subgrid--;
      outerFor3++;
      count++;
      if (subgrid === 6 || subgrid === 3) {
        outerFor3 = 0;
        count = 0;
      }
    }

    arrayOf3 = [...new Set(arrayOf3)];
    arrayOf3 = addArray(arrayOf3);
    if (arrayOf3 !== expected) return false;

    subgrid = 9;
    subgridCount += 3;
    outerFor3 = subgridCount;
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
      vertical.push(grid[arrayToCalc][vertIndex]);
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
