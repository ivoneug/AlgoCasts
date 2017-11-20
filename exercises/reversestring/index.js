// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return solution5(str);
}

function solution5(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

function solution4(str) {
    var reverse = '';

    for(let c of str) {
        reverse = c + reverse;
    }

    return reverse;
}

function solution3(str) {
    return str.split('').reverse().join('');
}

function solution2(str) {
    str = str.split('');
    for(var idx = 0; idx < Math.floor(str.length/2); idx++) {
        var tmp = str[idx];
        str[idx] = str[str.length - idx - 1];
        str[str.length - idx - 1] = tmp;
    }

    return str.join('');
}

function solution1(str) {
    var outStr = '';

    for(var idx = str.length - 1; idx >= 0; idx--) {
        outStr += str[idx];
    }

    return outStr;
}

module.exports = reverse;
