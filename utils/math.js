
/**
 * Invert number, programatically
 * @param {number} i
 * @returns {number}
 */
export function invert(i) {
    return -i - 1;
}

/**
 * Invert number, but only the negative
 * @param {number} i
 * @returns {number}
 */
export function sensify(i) {
    return i < 0 ? invert(i) : i;
}
