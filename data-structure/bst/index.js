class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BstTree {
    root = null;
    insert = (data) => {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
            return;
        } else {
            const insertNode = (current) => {
                if (newNode.data > current.data) {
                    if (current.right === null) {
                        return current.right = newNode;
                    } else {
                        insertNode(current.right)
                    }
                } else {
                    if (current.left === null) {
                        return current.left = newNode;
                    } else {
                        insertNode(current.left);
                    }
                }
            }
            return insertNode(this.root);
        }
    }
    findMin = () => {
        if (this.root === null) {
            return false;
        }
        let current = this.root;
        while(current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    findMax = () => {
        if (this.root === null) {
            return false;
        }
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
    search = (data) => {
        const searchNode = (current) => {
            if (data === current.data) {
                return current;
            } else if (data > current.data) {
                return searchNode(current.right);
            } else if (data < current.data) {
                return searchNode(current.left);
            } else {
                return false;
            }
        }
        return searchNode(this.root);
    }
    inOrder = () => {
        let result = [];
        let stack = [];
        let current = this.root;
        while(current !== null || stack.length != 0) {
            // first put everything from the left in stack
            while(current !== null) {
                stack.push(current);
                current = current.left;
            }
            // we need go back to the last stack node we put in to check upwards
            current = stack[stack.length -1];
            // this just store the data in array
            result.push(current.data);
            // after we store the left value, let's check right side
            current = current.right;
            // pop the top stack so we can move down the stack -> traverse upwards of the tree
            stack.pop();
        }
        return result;
    }
    // traverse parent node, then leaf node
    preOrder = () => {
        let result = [];
        let current = this.root;
        if (current === null) {
            return null;
        }
        const traverse = (node) => {
            result.push(node.data);
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        }
        traverse(current);
        return result;
    }
    // traverse leaf node, then parent node
    postOrder = () => {
        let result = [];
        let current = this.root;
        if (current === null) {
            return null;
        }
        const traverse = (node) => {
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            result.push(node.data);
        }
        traverse(current);
        return result;
    }

}

const bstTree = new BstTree();
bstTree.insert(5);
bstTree.insert(1);
bstTree.insert(6);
bstTree.insert(3);
bstTree.insert(0);
console.log(bstTree.root)
console.log(bstTree.findMin())
console.log(bstTree.findMax())
console.log(bstTree.search(1))
console.log(bstTree.inOrder())
console.log(bstTree.preOrder())
console.log(bstTree.postOrder())