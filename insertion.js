// Here’s some guidance for how insertion sort should work:

// Start by picking the second element in the array (we will assume the first element is the start of the “sorted” portion)
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
// Repeat until the array is sorted.

function insertionSort(array) {
    for (let i= 0; i< array.length; i++) {
        let currentValue = array[i];

        for(let j = i-1; j> -1 && array[j] > currentValue; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = currentValue;
    }
    return array;
}

module.exports = insertionSort;