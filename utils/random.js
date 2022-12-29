/**
 * Generate random number with specific range
 * @param {number} range
 * @returns {number}
 */
export function randomNumber(range) {
    return Math.floor(Math.random() * range);
}

/**
 * Return random item of an array
 * @param {T[]} array
 * @returns T
 */
export function randomItem(array) {
    return array[randomNumber(array.length)];
}
