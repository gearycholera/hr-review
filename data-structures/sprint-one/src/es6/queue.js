class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.first = 0;
    this.last = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.last] = value;
    this.last++;
    this.count++;
  }

  dequeue() {
    var dequeued = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    this.count - 1 < 0 ? this.count = 0 : this.count--;
    return dequeued;
  }

  size() {
    return this.count;
  }

}
