// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

/**
 * Queue using simple linked list
 */
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        if (!this.tail) {
            this.tail = { value };
            this.head = this.tail;

            return;
        }

        this.tail.prev = { value };
        this.tail = this.tail.prev;
    }

    remove() {
        if (!this.head) return undefined;

        const value = this.head.value;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.prev;
        }

        return value;
    }
}

/**
 * Queue using array
 * (should be slower on big amounts of data because of using of unshift)
 */
class Queue_array {
    constructor() {
        this.data = [];
    }

    add(value) {
        this.data.unshift(value);
    }

    remove() {
        return this.data.pop();
    }
}

module.exports = Queue;
