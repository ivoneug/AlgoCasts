// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    solution3(n);
}

function solution3(n, row = 0, string = '') {
    if (row === n) return;

    if (string.length === n) {
        console.log(string);
        solution3(n, row + 1);
        return;
    }

    const add = string.length <= row ? '#' : ' ';
    solution3(n, row, string + add);
}

function solution2(n) {
    let constructTheString = (string, step) => {
        if (string.length === n) return string;

        if (string.length <= step) {
            string += '#';
        } else {
            string += ' ';
        }

        return constructTheString(string, step);
    };

    for(let i = 0; i < n; i++) {
        let string = constructTheString('', i, 0);

        console.log(string);
    }
}

function solution1(n) {
    for(let i = 0; i < n; i++) {
        let string = '';

        for (let j = 0; j < n; j++) {
            if (j <= i) {
                string += '#';
            } else {
                string += ' ';
            }
        }

        console.log(string);
    }
}

module.exports = steps;
