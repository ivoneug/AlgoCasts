// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this._stack = new Stack();
        this._stackRev = new Stack();
        
        this._reversed = false;
    }
    
    _reverseToAdd() {
        if (!this._reversed) return;

        while (this._stackRev.peek()) {
            this._stack.push(this._stackRev.pop());
        }
        
        this._reversed = false;
    }
    
    _reverseToRemove() {
        if (this._reversed) return;

        while (this._stack.peek()) {
            this._stackRev.push(this._stack.pop());
        }
        
        this._reversed = true;
    }
    
    add(value) {
        this._reverseToAdd();
        this._stack.push(value);
    }
    
    remove() {
        this._reverseToRemove();
        return this._stackRev.pop();
    }
    
    peek() {
        this._reverseToRemove();
        return this._stackRev.peek();
    }
}

module.exports = Queue;
