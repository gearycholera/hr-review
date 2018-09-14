var BinarySearchTree = function(value) {
  var bst = Object.create(bstPrototype);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

var bstPrototype = {};

bstPrototype.insert = function(value) {
  var newBST = BinarySearchTree(value);
  var recurse = function(tree) {
    if (newBST.value < tree.value) {
      if (tree.left === null) tree.left = newBST;
      else recurse(tree.left);
    }
    if (newBST.value > tree.value) {
      if (tree.right === null) tree.right = newBST;
      else recurse(tree.right);  
    }
  }
  recurse(this);
}

bstPrototype.contains = function(target) {
  var found = false;
  var recurse = function(tree) {
    if (tree.value === target) found = true;
    if (target > tree.value && tree.right !== null) recurse(tree.right);
    if (target < tree.value && tree.left !== null) recurse(tree.left);
  }
  recurse(this);
  return found;
}

bstPrototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) this.left.depthFirstLog(cb);
  if (this.right) this.right.depthFirstLog(cb);
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
