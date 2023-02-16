class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;
        while (true) {
            //value can not be the same
            if (value === currentNode.value) return undefined;
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    find(value) {
        if (this.root === null) return false;
        let currentNode = this.root,
            found = false;
        while (currentNode && !found) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                found = true;
            }
            if (!found) return undefined;
            return currentNode;
        }
    }

    contains(value) {
        if (this.root === null) return false;
        let currentNode = this.root;
        while (currentNode && !false) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }
        return false;
    }

    // inoderTraverse() {
    //     if (this.root === null) return;
    //     let currentNode = this.root;
    //     currentNode.left.inoderTraverse();
    //     console.assert(currentNode.value);
    //     currentNode.right.inoderTraverse();
    // }
}
function TreeInorder(BinaryTree) {
    if (BinaryTree == null) return;
    TreeInorder(BinaryTree.left);
    console.log(BinaryTree.value);
    TreeInorder(BinaryTree.right);
}

const b = new BinaryTree();
b.insert(3);
b.insert(4);
b.insert(5);
b.insert(1);
b.insert(2);
b.insert(9);
TreeInorder(b);
