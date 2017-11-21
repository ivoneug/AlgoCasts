// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    return solution3(array, size);
}

function solution3(array, size) {
    let result = [];
    var idx = 0;

    while(idx < array.length) {
        result.push(array.slice(idx, idx + size));

        idx += size;
    }

    return result;
}

function solution2(array, size) {
    let result = [];

    for(let item of array) {
        let last = result[result.length - 1];

        if (!last || last.length === size) {
            result.push([item]);
        } else {
            last.push(item);
        }
    }

     return result;
}

function solution1(array, size) {
    let result = [];
    var chunk = [];

    for(let idx = 0; idx < array.length; idx++) {
        if (chunk.length === size) {
            result.push(chunk);
            chunk = [];
        }

        chunk.push(array[idx]);

        // for the last chunk we should manually add it to the result array
        if (idx === array.length - 1) {
            result.push(chunk);
        }
    }

    return result;
}

module.exports = chunk;
