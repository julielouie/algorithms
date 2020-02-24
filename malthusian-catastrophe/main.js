function malthusian(foodGrowth, popMult) {
  let year = 0;
  let foodProd = 100;
  let pop = 100;
  while (pop <= foodProd) {
    foodProd += foodGrowth;
    pop *= popMult;
    year++;
  }
  return year;
}

console.log(malthusian(3900, 1.26));
