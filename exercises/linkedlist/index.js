// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, nextNode = null) {
        this.data = data;
        this.next = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let node = this.head;
        let size = 0;

        while (node) {
            size++;
            node = node.next;
        }

        return size;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;

        while (node && node.next) {
            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) return;

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let prev = this.head;
        let node = this.head.next;

        while (node.next) {
            prev = node;
            node = node.next;
        }

        prev.next = null;
    }

    insertLast(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
        } else {
            this.getLast().next = node;
        }
    }

    getAt(index) {
        let idx = 0;
        let node = this.head;

        while (idx < index && node) {
            idx++;
            node = node.next;
        }

        return idx === index ? node : null;
    }

    removeAt(index) {
        if (!this.head) return;

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const prev = this.getAt(index - 1);
        if (!prev || !prev.next) return;

        prev.next = prev.next.next;
    }

    insertAt(data, index) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            return;
        }
        if (index === 0) {
            node.next = this.head;
            this.head = node;
            return;
        }

        const prev = this.getAt(index - 1) || this.getLast();
        node.next = prev.next;
        prev.next = node;
    }

    forEach(func) {
        if (!func) return;

        let node = this.head;
        let idx = 0;

        while (node) {
            func(node, idx);
            idx++;
            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;

        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
