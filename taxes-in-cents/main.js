function calcTaxCents(dollars, percent) {
  if (!dollars || !percent || Number.isNaN(parseInt(dollars)) || Number.isNaN(parseInt(percent))) {
    return 'Please provide valid numbers!'
  }
  if (typeof dollars !== 'number' || typeof percent !== 'number') {
    dollars = +dollars;
    percent = +percent;
  }
  percent = percent * 0.01;
  return `${((dollars * percent) / 0.01).toFixed()} cents`;
}
