function daysToFreedom(date1, date2) {
  const start = new Date(date1);
  const end = new Date(date2);
  const timeDifference = end.getTime() - start.getTime();
  return timeDifference / (1000 * 60 * 60 * 24); //num of milliseconds in a day
}
