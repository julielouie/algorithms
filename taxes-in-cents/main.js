function calcTaxCents(dollars, percent) {
  if (!dollars || !percent || Number.isNaN(parseInt(dollars)) || Number.isNaN(parseInt(percent))) {
    return 'Please provide valid numbers!'
  }
  if (typeof dollars !== 'number' || typeof percent !== 'number') {
    dollars = +dollars;
    percent = +percent;
  }
  percent = percent * 0.01;
  return ((dollars * percent) / 0.01).toFixed();
}

const dollars1 = 900.50;
const percent1 = 20;

const dollars2 = 720.46;
const percent2 = 15;

console.log(calcTaxCents(dollars1, percent1));
