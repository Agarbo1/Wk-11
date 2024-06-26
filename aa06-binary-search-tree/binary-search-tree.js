// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      this.root = null;
    }

    insert(val, currentNode=this.root) {
      if(!this.root) {
        this.root = new TreeNode(val)
        return
      }
      if(val < currentNode.val) {
        if(!currentNode.left) {
          currentNode.left = new TreeNode(val)
        } else {
          this.insert(val, currentNode.left)
        }
      } else {
        if(!currentNode.right) {
          currentNode.right = new TreeNode(val)
        } else {
          this.insert(val, currentNode.right)
        }
      }
    }

    search(val) {
      if(!this.root) return false;
      let currentNode = this.root;
      while(currentNode) {
        if(val < currentNode.val) {
          currentNode = currentNode.left
        } else if(val > currentNode.val) {
          currentNode = currentNode.right
        } else return true
      }
      return false;
    }


    preOrderTraversal(currentNode = this.root) {
      if(!currentNode) return

      console.log(currentNode.val)
      this.preOrderTraversal(currentNode.left)
      this.preOrderTraversal(currentNode.right)
    }


    inOrderTraversal(currentNode = this.root) {
      if(!currentNode) return

      this.inOrderTraversal(currentNode.left)
      console.log(currentNode.val)
      this.inOrderTraversal(currentNode.right)
    }


    postOrderTraversal(currentNode = this.root) {
      if(!currentNode) return

      this.postOrderTraversal(currentNode.left)
      this.postOrderTraversal(currentNode.right)
      console.log(currentNode.val)
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      const values = [];

      values.push(this.root)

      while(values.length) {
        let curr = values.shift()
        console.log(curr.val)

        if(curr.left) {
          values.push(curr.left)
        }

        if(curr.right) {
          values.push(curr.right)
        }
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      const values = [];

      values.push(this.root)

      while(values.length) {
        let curr = values.pop()
        console.log(curr.val)

        if(curr.left) {
          values.push(curr.left)
        }

        if(curr.right) {
          values.push(curr.right)
        }
      }
    }
  }

  module.exports = { BinarySearchTree, TreeNode };

// Your code here
