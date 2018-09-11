

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var keyValue = [k, v]
  if (this._storage.get(index)) {
    this._storage.get(index).push(keyValue);
  } else {
    this._storage.set(index, []);
    this._storage.get(index).push(keyValue);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  var output;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) output = bucket[i][1];
  }
  return output;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


