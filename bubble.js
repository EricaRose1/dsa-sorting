// Implement a function called bubbleSort. Given an array, 
// bubbleSort will sort the values in the array.

function bubbleSort(array) {
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    };

    for(let i = array.length; i > 0; i--) {
        for(let j = 0; j < i -1; j++) {
            if(array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}

module.exports = bubbleSort;