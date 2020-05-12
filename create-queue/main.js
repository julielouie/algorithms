class Queue {
  constructor() {
    this.data = [];
  }

  add(element) {
    this.data.unshift(element);
  }

  remove() {
    this.data.pop();
  }
}

const queuie = new Queue();

queuie.add(1);
queuie.add(2);
queuie.add(3);
queuie.add(4);
queuie.add(5);
console.log(queuie);
// queuie.remove();
// queuie.remove();
// console.log(queuie);
