var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.count = 0;
  instance.lowestCount = 0;
  instance.magnitude = 0;
  instance.storage = {};
  return instance
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.count] = val;
  this.count++;
  this.magnitude++;
}

queueMethods.dequeue = function() {
  var dequeued = this.storage[this.lowestCount];
  delete this.storage[this.lowestCount];
  this.lowestCount++;
  this.magnitude - 1 < 0 ? this.magnitude = 0 : this.magnitude--;
  return dequeued;
}

queueMethods.size = function() {
  return this.magnitude;
}

