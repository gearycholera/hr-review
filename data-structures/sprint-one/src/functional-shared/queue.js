var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.magnitude = 0;
  instance.count = 0;
  instance.lowestCount = 0;
  instance.storage = {};
  extend(instance, queueMethods);
  return instance;
};

var extend = function(dest, src) {
  for (var key in src) {
    dest[key] = src[key]
  }
}

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
    this.magnitude++;
  },
  dequeue: function() {
    var dequeued = this.storage[this.lowestCount];
    delete this.storage[this.lowestCount];
    this.magnitude--;
    this.lowestCount++;
    if (this.magnitude < 0) this.magnitude = 0;
    return dequeued;
  },
  size: function() {
    return this.magnitude;
  }
};


