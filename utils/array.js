/**
 * Generate array and fill it with something sus ඞ
 * @param {number} length
 * @param {() => T} generator
 * @returns {T[]}
 */
export function generateArray(length, generator) {
    return [...Array(length)].map(generator);
}

/**
 * push item to an array if item not exists in that array
 * @param {T[]} array
 * @param {T} elem
 */
export function pushNonExists(array, elem) {
    if (array.indexOf(elem) === -1) {
        array.push(elem);
    }
}

/**
 * remove item from an array if item exists in that array
 * @param {T[]} array
 * @param {T} elem
 */
export function removeFromArray(array, elem) {
    const index = array.indexOf(elem);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

/**
 * Swap an item of array into another
 * @param {T[]} array
 * @param {number} x
 * @param {number} y
 */
export function swapArray(array, x, y) {
    const temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}
