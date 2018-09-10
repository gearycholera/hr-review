var Queue = function(obj) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.obj = obj;
};

Queue.prototype.count = 0;
Queue.prototype.first = 0;
Queue.prototype.last = 0;
Queue.prototype.storage = {};
Queue.prototype.enqueue = function(value) {
  this.count++;
  this.storage[this.last] = value;
  this.last++;

}
Queue.prototype.dequeue = function() {
  this.count - 1 < 0 ? this.count = 0 : this.count--;
  var dequeued = this.storage[this.first];
  delete this.storage[this.first];
  this.first++;
  return dequeued;
}
Queue.prototype.size = function() {
  return this.count;
}