// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    return solution2(root);
}

function solution2(root) {
    const counters = [0];
    
    const levelEndMarker = {};
    const arr = [root, levelEndMarker];
    
    while (arr.length > 1) {
        const node = arr.shift();
        
        if (node === levelEndMarker) {
            arr.push(levelEndMarker);
            counters.push(0);
            
            continue;
        }
        
        counters[counters.length - 1]++;
        arr.push(...node.children);
    }
    
    return counters;
}

function solution1(root) {
    const result = [1];
    let level = [root];
    let nextLevel = [];
    
    while (level.length > 0) {
        const node = level.shift();
        nextLevel.push(...node.children);
        
        if (level.length === 0 && nextLevel.length > 0) {
            level = nextLevel;
            nextLevel = [];
            result.push(level.length);
        }
    }
    
    return result;
}

module.exports = levelWidth;
