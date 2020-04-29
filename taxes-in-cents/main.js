function calcTaxCents(dollars, percent) {
  if (!dollars || !percent || Number.isNaN(parseInt(dollars)) || Number.isNaN(parseInt(percent))) {
    return 'Please provide valid monetary amounts!'
  }
  if (typeof dollars !== 'number' || typeof percent !== 'number') {
    dollars = +dollars;
    percent = +percent;
  }


}

const dollars1 = 900.50;
const percent1 = 20;

const dollars2 = 720.46;
const percent2 = 15;

console.log(calcTaxCents('900', '20'))
// console.log(calcTaxCents(dollars1, percent1));
