// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    return solution1(n);
}

function solution2(n) {
    // actually Math.abs(n) is not necesarry in this case
    let reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}

function solution1(n) {
    var result = 0;
    let sign = Math.sign(n);
    n = Math.abs(n);

    while(n > 0) {
        result *= 10;

        let tmp = n % 10;
        n -= tmp;
        n /= 10;
        result += tmp;
    }

    return result * sign;
}

module.exports = reverseInt;
