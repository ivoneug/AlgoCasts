// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'
//

function pyramid(n) {
    solution3(n);
}

function solution3(n, row = 0, string = '') {
    const columns = 2 * n - 1;
    const midpoint = Math.floor(columns / 2);

    if (row === n) {
        return;
    }
    if (string.length === columns) {
        console.log(string);
        solution3(n, row + 1);
        return;
    }

    if (midpoint - row <= string.length && midpoint + row >= string.length) {
        string += '#';
    } else {
        string += ' ';
    }

    solution3(n, row, string);
}

function solution2(n) {
    const columns = 2 * n - 1;
    // here we use the midpoint calculation to determine
    // amount of # in each level of pyramid
    const midpoint = Math.floor(columns / 2);

    for (let i = 0; i < n; i++) {
        let string = '';

        for (let j = 0; j < columns; j++) {
            if (midpoint - i <= j && midpoint + i >= j) {
                string += '#';
            } else {
                string += ' ';
            }
        }

        console.log(string);
    }
}

function solution1(n) {
    const columns = n + (n - 1);

    for (let i = 0; i < n; i++) {
        let string = '';
        // here we use space calculation to determine amount of spaces
        // to the left/right of the current level of pyramid
        let spaces = (n - (i + 1));

        for (let j = 0; j < columns; j++) {
            if (j < spaces || j >= (columns - spaces)) {
                string += ' ';
            } else {
                string += '#';
            }
        }

        console.log(string);
    }
}

module.exports = pyramid;
