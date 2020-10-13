/**
 * Binary Search Tree.
 * 
 * Binary Search Tree (BST) is a tree that has TWO child nodes at the most.
 * The two nodes is identified as: left and right node.
 * 
 * The left of the two notes always has a smaller value than the right.
 * This applies to nodes and the entire sub-tree (increases speed of search).
 * 
 */

 class TreeNode {
    value: number;
    leftNode: TreeNode;
    rightNode: TreeNode;

    constructor(value: number) {
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
    }
 }

 class BinarySearchTree {
     root: TreeNode;

     constructor() {
         this.root = null;
     }

     addNode(node: TreeNode): boolean {
         if (this.root == null) {
             this.root = node;
             return true;
         } 

         let currentNode = this.root;
         let traveringTree = true;

         while (traveringTree) {
             if (currentNode.value == node.value) {
                 // No duplicates.
                 traveringTree = false;
                 return false;
             } else if (node.value < currentNode.value) {
                 if (currentNode.leftNode == null) {
                     // I had no child. Please give me.
                     currentNode.leftNode = node;
                     traveringTree = false;
                     return true;
                 } else {
                     // I am smaller. Look to the left.
                     currentNode = currentNode.leftNode;
                 }
             } else if (node.value > currentNode.value) {
                 // Look to the right.
                 if (currentNode.value == null) {
                     // I had no right child. Plox provide.
                     currentNode.rightNode = node;
                     traveringTree = false;
                     return true;
                 } else {
                     currentNode = currentNode.rightNode;
                 }
             }
         }
     }

     /**
     * Breadth-First search.
     * 
     * Looks in the width of the tree.
     * That means at all child nodes at one level before moving on.
     */
     breadthFirstSearch(): number[] {
         let nodesToVisit: TreeNode[] = [];
         let visited: number[] = [];

         nodesToVisit.push(this.root);

         while(nodesToVisit.length >= 1) {
             let node = nodesToVisit.shift();

             visited.push(node.value);

             if (node.leftNode != null) {
                 nodesToVisit.push(node.leftNode);
             }

             if (node.rightNode != null) {
                 nodesToVisit.push(node.rightNode);
             }
         }

         return visited;
     }

     /**
      * Depth First Search
      * 
      * Starting at the root node, 
      * keeps going left until it hits the last leaf.
      */
     depthFirstSearch(): number[] {
         let nodesToVisit: TreeNode[] = [];
         let visited: number[] = [];

         nodesToVisit.push(this.root);

         while (nodesToVisit.length >= 1) {
             let node = nodesToVisit.pop();

             visited.push(node.value);

             if (node.rightNode != null) {
                 nodesToVisit.push(node.rightNode);
             }

             // Add the left node to the stack. We add left child after the rigth child node into the stack.
             // This is because we have to traverse left subtree before traversing right sub tree.
             if (node.leftNode != null) {
                 nodesToVisit.push(node.leftNode);
             }
         }

         return visited;
     }
 }

 