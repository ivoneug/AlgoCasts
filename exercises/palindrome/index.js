// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return solution3(str);
}

function solution3(str) {
    return str.split('').every((char, idx) => {
        return char === str[str.length - idx - 1];
    });
}

function solution2(str) {
    const reversed = str.split('').reverse().join('');

    return str === reversed;
}

function solution1(str) {
    var isPalindrome = true;

    for(let idx = 0; idx < Math.floor(str.length/2); idx++) {
        if (str[idx] !== str[str.length - idx - 1]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}

module.exports = palindrome;
