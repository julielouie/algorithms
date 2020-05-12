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
