// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
    return solution2(list);
}

function solution1(list) {
    if (!list.getFirst()) return null;

    let fastNode = list.getFirst();

    for (let node of list) {
        if (fastNode.next && fastNode.next.next) {
            fastNode = fastNode.next.next;
        } else {
            return node;
        }
    }
}

function solution2(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

module.exports = midpoint;
