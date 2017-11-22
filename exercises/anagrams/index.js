// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return solution3(stringA, stringB);
}

function solution3(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

    // if strings lengths are not equal - they're not anagrams
    if (stringA.length !== stringB.length) return false;

    stringA = stringA.split('').sort().join('');
    stringB = stringB.split('').sort().join('');

    return stringA === stringB;
}

function solution2(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

    // if strings lengths are not equal - they're not anagrams
    if (stringA.length !== stringB.length) return false;

    const mapA = {};
    const mapB = {};

    // helper function to modify map
    let checkChar = (char, map) => {
        if (!map[char]) {
            map[char] = 1;
        } else {
            map[char]++;
        }
    };

    for(let idx = 0; idx < stringA.length; idx++) {
        let charA = stringA[idx];
        let charB = stringB[idx];

        checkChar(charA, mapA);
        checkChar(charB, mapB);
    }

    for(let key in mapA) {
        if (mapA[key] !== mapB[key]) return false;
    }

    return true;
}

function solution1(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

    // if strings lengths are not equal - they're not anagrams
    if (stringA.length !== stringB.length) return false;

    // helper function to create a map out of string
    let createMap = (str) => {
        const map = {};

        for(let char of str) {
            if (!map[char]) {
                map[char] = 1;
            } else {
                map[char]++;
            }
        }

        return map;
    };

    const mapA = createMap(stringA);
    const mapB = createMap(stringB);

    for(let key in mapA) {
        if (mapA[key] !== mapB[key]) return false;
    }

    return true;
}

module.exports = anagrams;
