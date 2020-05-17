function daysToFreedom(date1, date2) {
  const start = new Date(date1);
  const end = new Date(date2);
  const timeDifference = end.getTime() - start.getTime();
  return timeDifference / (1000 * 60 * 60 * 24); //num of milliseconds in a day
}

const date1 = '3/19/20';

const date2 = '5/15/20';
// const date2 = '5/30/20';
// const date2 = '6/15/20';
// const date2 = '6/30/20';
// const date2 = '10/01/20';

console.log(daysToFreedom(date1, date2));
