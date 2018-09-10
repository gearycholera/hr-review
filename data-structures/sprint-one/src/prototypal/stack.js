var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.count = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.count] = val;
  this.count++;
}

stackMethods.pop = function() {
  var popped = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  this.count--;
  if (this.count < 0) this.count = 0;
  return popped;
}

stackMethods.size = function() {
  return this.count;
}


