function multiply(X) {
  for (let firstIndex = 1; firstIndex <= X; firstIndex++) {
    for (let secIndex = 1; secIndex < 13; secIndex++) {
      console.log(`${firstIndex} x ${secIndex} = ${firstIndex * secIndex}`);
    }
  }
}
