// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) minIndex = j;
        }

        if (minIndex !== i) {
            const tmp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = tmp;
        }
    }

    return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
