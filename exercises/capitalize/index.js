// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    return solution3(str);
}

function solution3(str) {
    let result = str[0].toUpperCase();

    for(let idx = 1; idx < str.length; idx++) {
        if (str[idx - 1] === ' ') {
            result += str[idx].toUpperCase();
        } else {
            result += str[idx];
        }
    }

     return result;
}

function solution2(str) {
    const words = [];

    for(let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

     return words.join(' ');
}

function solution1(str) {
    let arr = str.split(' ');

    arr = arr.map((item) => {
        return item[0].toUpperCase() + item.slice(1);
    });

    return arr.join(' ');
}

module.exports = capitalize;
