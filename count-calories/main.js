function countSuccessDays(calories, exHours) {
  const record = [];
  let successes = 0;
  let cal = calories[0];
  let hour = exHours[0];
  calories.forEach((day, index) => {
    if (index === 0) {
      record.push('-');
      return;
    }
    if (cal > day) record.push(1);
    else record.push(0);
    cal = day;
  });
  exHours.forEach((day, index) => {
    if (index === 0) return;
    if (hour < day && record[index] === 1) successes++;
    else return;
    hour = day;
  });
  return successes;
}

const calories = [123, 456, 48, 685, 8569, 12, 48];
const exHours = [2, 4, 5, 7, 9, 10, 5];

// const calories = [2, 5, 1, 8, 4];
// const exHours = [9, 8, 7, 5, 9];

console.log(countSuccessDays(calories, exHours));
