var Stack = function(obj) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.obj = obj;
};

Stack.prototype.count = 0;
Stack.prototype.storage = {};
Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
}
Stack.prototype.pop = function() {
  this.count - 1 < 0 ? this.count = 0 : this.count--;
  var popped = this.storage[this.count];
  delete this.storage[this.count];
  return popped;
}
Stack.prototype.size = function() {
  return this.count;
}
