const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    let MainNode = (rootTree) => {
      if (rootTree === null) {
        this.rootTree = new Node(data);
      } else if (data < rootTree.data) {
        if (rootTree.left === null) {
          rootTree.left = new Node(data);
        } else {
          MainNode(rootTree.left);
        }
      } else if (data > rootTree.data) {
        if (rootTree.right === null) {
          rootTree.right = new Node(data);
        } else {
          MainNode(rootTree.right);
        }
      }
    };
    MainNode(this.rootTree);
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    if (this.rootTree === null) return null;
    let currNode = this.rootTree;
    if (currNode.data === data) return currNode;
    else {
      while (currNode)
        if (currNode.data === data) return currNode;
        else if (currNode.data !== data) {
          if (data < currNode.data) {
            currNode = currNode.left;
          } else if (data > currNode.data) {
            currNode = currNode.right;
          }
        }
    }
    return null;
  }

  remove(data) {
    const remNode = function (currNode, data) {
      if (currNode == null) {
        return null;
      }
      if (data == currNode.data) {
        if (currNode.left == null && currNode.right == null) {
          return null;
        }
        if (currNode.left == null) {
          return currNode.right;
        }
        if (currNode.right == null) {
          return currNode.left;
        }
        var tNode = currNode.right;
        while (tNode.left !== null) {
          tNode = tNode.left;
        }
        currNode.data = tNode.data;
        currNode.right = remNode(currNode.right, tNode.data);
        return currNode;
      } else if (data < currNode.data) {
        currNode.left = remNode(currNode.left, data);
        return currNode;
      } else if (data > currNode.data) {
        currNode.right = remNode(currNode.right, data);
        return currNode;
      }
    };
    this.rootTree = remNode(this.rootTree, data);
  }

  min() {
    let currNode = this.rootTree;
    while (currNode.left !== null) {
      currNode = currNode.left;
    }
    return currNode.data;
  }

  max() {
    let currNode = this.rootTree;
    while (currNode.right !== null) {
      currNode = currNode.right;
    }
    return currNode.data;
  }
}

// const bst = new BinarySearchTree();

// bst.add(10);
// bst.add(5);
// bst.add(15);

// console.log();

module.exports = {
  BinarySearchTree,
};
