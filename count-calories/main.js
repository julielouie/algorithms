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
