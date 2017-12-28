// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    return solution3(n);
}

function solution1(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let number = 0;
    let first = 0;
    let second = 1;

    for (let idx = 1; idx < n; idx++) {
        number = first + second;

        first = second;
        second = number;
    }

    return number;
}

function solution2(n) {
    const series = [0, 1];

    for (let i = 2; i <= n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }

    return series[n];
}

function solution3(n) {
    if (n < 2) return n;

    return solution3(n - 1) + solution3(n - 2);
}

function memoize(func) {
    const cache = {};

    return function(...args) {
        if (cache[args]) return cache[args];

        const result = func.apply(this, args);
        cache[args] = result;

        return result;
    };
}

solution3 = memoize(solution3);

module.exports = fib;
