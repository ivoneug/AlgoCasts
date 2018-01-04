// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    
    insert(data) {
        // const node = new Node(data);
        // const insertAction = (node, nodeToInsert) => {
        //     if (node.data === nodeToInsert.data) return;
        // 
        //     if (node.data > nodeToInsert.data) {
        //         if (node.left) {
        //             insertAction(node.left, nodeToInsert);
        //         } else {
        //             node.left = nodeToInsert;
        //         }
        //     } else if (node.data < nodeToInsert.data) {
        //         if (node.right) {
        //             insertAction(node.right, nodeToInsert);
        //         } else {
        //             node.right = nodeToInsert;
        //         }
        //     }
        // };
        // 
        // insertAction(this, node);
        
        if (this.data === data) return;
        
        if (this.data > data) {
            if (this.left) {
                this.left.insert(data);
            } else {
                this.left = new Node(data);
            }
        } else if (this.data < data) {
            if (this.right) {
                this.right.insert(data);
            } else {
                this.right = new Node (data);
            }
        }
    }
    
    contains(data) {
        if (this.data === data) return this;
        
        if (this.data > data && this.left) {
            return this.left.contains(data);
        } else if (this.data < data && this.right) {
            return this.right.contains(data);
        }
        
        return null;
    }
}

module.exports = Node;
