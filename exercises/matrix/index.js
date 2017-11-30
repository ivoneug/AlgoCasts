// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
        // no need to add empty values to subarray cuz in JS we can assign
        // value to any index in empty array
        // for (let j = 0; j < n; j++) {
        //     result[i].push(0);
        // }
    }

    let counter = 1;
    let column = 0;
    let columnEnd = n - 1;
    let row = 0;
    let rowEnd = n - 1;

    while (column <= columnEnd && row <= rowEnd) {
        for (let idx = column; idx <= columnEnd; idx++) {
            result[row][idx] = counter;
            counter++;
        }

        row++;

        for (let idx = row; idx <= rowEnd; idx++) {
            result[idx][columnEnd] = counter;
            counter++;
        }

        columnEnd--;

        for (let idx = columnEnd; idx >= column; idx--) {
            result[rowEnd][idx] = counter;
            counter++;
        }

        rowEnd--;

        for (let idx = rowEnd; idx >= row; idx--) {
            result[idx][column] = counter;
            counter++;
        }

        column++;
    }

    return result;
}

module.exports = matrix;
