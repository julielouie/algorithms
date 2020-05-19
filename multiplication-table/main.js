function multiply(X) {
  for (let firstIndex = 1; firstIndex <= X; firstIndex++) {
    for (let secIndex = 1; secIndex < 13; secIndex++) {
      console.log(`${firstIndex} x ${secIndex} = ${firstIndex * secIndex}`);
    }
  }
}

// const num = 3;
// const num = 5;
// const num = 6;
// const num = 10;
const num = 12;

console.log(multiply(num));
