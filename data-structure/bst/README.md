# Binary Search Tree
* Binary Search Tree is a node-based binary tree data structure
* The farthest left leaf node will be the min value
* The farthest right leaf node will be the max value

## Basic Operation

* Search − Searches an element in a tree.

* Insert − Inserts an element in a tree.

* Pre-order Traversal − Traverse parent node, then leaf node

* In-order Traversal − Traverse from farthest left leaf to farthest right leaf, so result will be in sorted order

* Post-order Traversal − Traverse leaf node, then parent node

## Node
```javascript
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
```

## Algorithm
### Insert
```javascript
insert = (data) => {
    const newNode = new Node(data);
    if (this.root === null) {
        this.root = newNode;
        return;
    } else {
        const insertNode = (parentNode) => {
            if (newNode.data > parentNode.data) {
                if (parentNode.right === null) {
                    return parentNode.right = newNode;
                } else {
                    insertNode(parentNode.right)
                }
            } else {
                if (parentNode.left === null) {
                    return parentNode.left = newNode;
                } else {
                    insertNode(parentNode.left);
                }
            }
        }
        return insertNode(this.root);
    }
}
```
### Search
```javascript
search = (data) => {
    const searchNode = (parentNode) => {
        if (data === parentNode.data) {
            return parentNode;
        } else if (data > parentNode.data) {
            return searchNode(parentNode.right);
        } else if (data < parentNode.data) {
            return searchNode(parentNode.left);
        } else {
            return false;
        }
    }
    return searchNode(this.root);
}
```
More other method like tarverse node tree can be found in [here](index.js)