// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data
        this.children = [];
    }

    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(func) {
        if (!func || !this.root) return;

        const items = [this.root];
        while (items.length > 0) {
            const node = items.shift();
            items.push(...node.children);

            func(node);
        }
    }

    traverseDF(func) {
        if (!func || !this.root) return;

        const items = [this.root];
        while (items.length > 0) {
            const node = items.shift();
            items.unshift(...node.children);

            func(node);
        }
    }

    traverseDF_recursive(func) {
        if (!func || !this.root) return;

        this._traverseDF(this.root, func);
    }

    _traverseDF(node, func) {
        func(node);

        for (let child of node.children) {
            this._traverseDF(child, func);
        }
    }
}

module.exports = { Tree, Node };
