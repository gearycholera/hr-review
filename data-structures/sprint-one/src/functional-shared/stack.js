var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.count = 0;
  extend(instance, stackMethods);
  return instance;
};

var extend = function(dest, src) {
  for (var key in src) {
    dest[key] = src[key];
  }
}

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    var popped = this.storage[this.count-1];
    delete this.storage[this.count - 1]
    this.count--;
    if (this.count < 0) this.count = 0;
    return popped;
  },
  size: function() {
    return this.count;
  }

};


