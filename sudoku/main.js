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
    let currentVertical = calculateVertical(outerVert, 9);
    if (currentVertical) {
      continue;
    } else {
      return false;
    }
  }

  let subgridCount = 0;
  let subgrid = 9;
  let count = 0;
  for (let outerFor3 = 0; outerFor3 < length;) {

    let arrayOf3 = [];

    while (subgrid > 0) {
      arrayOf3.push(grid[outerFor3][count]);
      subgrid--;
      outerFor3++;
      if (subgrid === 6 || subgrid === 3) {
        outerFor3 -= 3;
        count++;
      }
    }
    if (!checkArray(arrayOf3)) return false;

    subgrid = 9;
    subgridCount++;
    count++;
    if (subgridCount < 3) {
      outerFor3 = 0;
    } else if (subgridCount === 3) {
      count = 0;
    } else if (subgridCount < 6) {
      outerFor3 = 3;
    } else if (subgridCount === 6) {
      count = 0;
    } else if (subgridCount < 9) {
      outerFor3 = 6;
    } else {
      outerFor3 = subgridCount;
    }
  }

  return true;





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

  function calculateVertical(vertIndex, count) {
    let currentArray = 0;
    let vertical = [];

    while (count > 0) {
      vertical.push(grid[currentArray++][vertIndex]);
      count--;
    }

    return checkArray(vertical);
  }
}
