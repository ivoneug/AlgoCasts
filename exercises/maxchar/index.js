// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let store = {};
    let max = { key: '', value: 0 };

    for(let char of str) {
        if (char in store) {
            store[char]++;
        } else {
            store[char] = 1;
        }

        // evaluate maximum character right in main loop
        if (max.value < store[char]) {
            max.key = char;
            max.value = store[char];
        }

        // optimisation, when we're get char repetiance value >= half the 
        // string length - no need to process further - we've got
        // our max character
        if (max.value >= str.length/2) break;
    }

    return max.key;
}

module.exports = maxChar;
