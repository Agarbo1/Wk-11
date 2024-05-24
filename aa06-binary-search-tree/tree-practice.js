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
  if (!rootNode) return true
  const leftHeight = getHeight(rootNode.left)
  const rightHeight = getHeight(rootNode.right)
  const heightDiff = Math.abs(leftHeight - rightHeight)
  if (heightDiff > 1) return false

  return balancedTree(rootNode.left) && balancedTree(rootNode.right)

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
  // ****CODE IN PROGRESS*****
  // if (!rootNode) return undefined
  // if (rootNode.val === target) {
  //   return null
  // }
  // if ((rootNode.left.val === target) || (rootNode.right.val === target)) {
  //   return rootNode
  // }else return getParentNode(rootNode.left, target) && getParentNode(rootNode.right, target)
  //****PASSING CODE
  if (!rootNode || !target) return undefined;

  if (rootNode.val === target) return null;

  const findParent = (node, targetVal) => {
    if (!node) return undefined;

    if ((node.left && node.left.val === targetVal) || (node.right && node.right.val === targetVal)) {
      return node;
    }
    const leftResult = findParent(node.left, targetVal);
    if (leftResult !== undefined) return leftResult;
    return findParent(node.right, targetVal);
  };

  return findParent(rootNode, target);
}

function inOrderPredecessor (rootNode, target) {
  const nodes = [];

  const makeArray = (node = rootNode, arr = nodes) => {
    if (!node) return
    makeArray(node.left, arr)
    arr.push(node)
    makeArray(node.right, arr)
  }
  makeArray()
  const targetNode = nodes.find((el) => el.val === target)
  const targetIndex = nodes.indexOf(targetNode)
  if (targetIndex > 0) {
    return nodes[targetIndex - 1].val
  } else return null
}

  function deleteNodeBST(rootNode, target) {
    if (!rootNode) return null;

    let parent = null;
    let current = rootNode;

    // Find the node to delete and its parent
    while (current && current.val !== target) {
      parent = current;
      if (target < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    // If the node with the target value doesn't exist
    if (!current) return undefined;

    // Case 1: Node to delete has no children
    if (!current.left && !current.right) {
      if (!parent) {
        rootNode = null;
      } else if (current === parent.left) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    // Case 2: Node to delete has one child
    else if (!current.right) {
      if (!parent) {
        rootNode = current.left;
      } else if (current === parent.left) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    } else if (!current.left) {
      if (!parent) {
        rootNode = current.right;
      } else if (current === parent.left) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    }
    // Case 3: Node to delete has two children
    else {
      let successor = current.right;
      let successorParent = current;
      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }

      // Replace the value of the node to delete with the value of the successor
      current.val = successor.val;

      // Delete the successor node (which is either a leaf or a node with right child only)
      if (successor === successorParent.left) {
        successorParent.left = successor.right;
      } else {
        successorParent.right = successor.right;
      }
    }

    return rootNode;
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
console.log(inOrderPredecessor(bstRootBig, 5))
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
