const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  let current = rootNode;
  while (current.left) {
    current = current.left;
  }
  return current.val
}

function findMaxBST (rootNode) {
  let current = rootNode;
  while (current.right) {
    current = current.right;
  }
  return current.val
}

function findMinBT (rootNode) {
  let current = [rootNode]
  let vals = []
  while(current.length) {
    let curr = current.shift()
    vals.push(curr.val)
    if (curr.left) current.push(curr.left)
    if (curr.right) current.push(curr.right)
    }

  return Math.min(...vals)
}

function findMaxBT (rootNode) {
  let current = [rootNode]
  let vals = []
  while(current.length) {
    let curr = current.shift()
    vals.push(curr.val)
    if (curr.left) current.push(curr.left)
    if (curr.right) current.push(curr.right)
    }

  return Math.max(...vals)
}

function getHeight (rootNode) {
    if (rootNode === null) return -1

    const leftHeight = getHeight(rootNode.left)
    const rightHeight = getHeight(rootNode.right)

    return Math.max(leftHeight, rightHeight) +1;

}

function balancedTree (rootNode) {

  const leftHeight = getHeight(rootNode.left)
  const rightHeight = getHeight(rootNode.right)
  const heightDiff = Math.abs(leftHeight - rightHeight)
  return heightDiff <= 1

}

function countNodes (rootNode) {
  let current = [rootNode]
  let vals = []
  while(current.length) {
    let curr = current.shift()
    vals.push(curr.val)
    if (curr.left) current.push(curr.left)
    if (curr.right) current.push(curr.right)
    }

  return vals.length
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}

let bstRootBig;
bstRootBig = new TreeNode(8);
    bstRootBig.left = new TreeNode(3);
    bstRootBig.left.left = new TreeNode(2);
    bstRootBig.left.left.left = new TreeNode(1);
    bstRootBig.left.right = new TreeNode(5);
    bstRootBig.left.right.left = new TreeNode(4);
    bstRootBig.left.right.right = new TreeNode(7);
    bstRootBig.left.right.right.left = new TreeNode(6);
    bstRootBig.right = new TreeNode(10);
    bstRootBig.right.right = new TreeNode(11);
    bstRootBig.right.right.right = new TreeNode(12);
    bstRootBig.right.right.right.right = new TreeNode(15);
    bstRootBig.right.right.right.right.left = new TreeNode(14);
debugger
console.log(balancedTree(bstRootBig))
    //         8
    //       /   \
    //      3     10
    //    /   \     \
    //   2     5     11
    //  /    /  \     \
    // 1    4    7    12
    //          /      \
    //         6       15
    //                /
    //              14
