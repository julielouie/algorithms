function malthusian(foodGrowth, popMult) {
  const catastrophe = {};
  let year = 0;
  let foodProd = 100;
  let pop = 100;
  while (foodProd <= pop) {
    foodProd += foodGrowth;
    catastrophe.foodProd = foodProd;
    pop *= popMult;
    catastrophe.pop = pop;
    catastrophe.year = year;
    year++;
  }
  return catastrophe;
}
