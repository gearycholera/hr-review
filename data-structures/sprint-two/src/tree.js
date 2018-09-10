var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) return true;
  else {
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];
      if (child.contains(target)) return true;
    }
  }
  return false;
};

var extend = function(dest, src) {
  for (var key in src) {
    dest[key] = src[key];
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
