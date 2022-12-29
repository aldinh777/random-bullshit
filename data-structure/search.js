import { invert } from '../utils/math.js';

/**
 * Check every items until item found
 * @param {T[]} array
 * @param {T} find
 * @returns {number}
 */
export function bruteForceSearch(array, find) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === find) {
            return i;
        }
    }
    return invert(array.length);
}

/**
 * Check every items linearly, assuming array are sorted
 * @param {T[]} array
 * @param {T} find
 * @returns {number}
 */
export function linearSearch(array, find) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= find) {
            if (array[i] === find) {
                return i;
            } else {
                return invert(i);
            }
        }
    }
    return invert(array.length);
}

/**
 * Slice array in half, slice it again, again and again until it find the value
 * @param {T[]} array
 * @param {T} find
 * @returns {number}
 */
export function binarySearch(array, find) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        const pivot = Math.floor((end - start) / 2) + start;
        if (array[pivot] === find) {
            return pivot;
        } else if (find > array[pivot]) {
            start = pivot + 1;
        } else {
            end = pivot - 1;
        }
    }
    return invert(start);
}

/**
 * Magically guess the expected index and slice array from there, over and over
 * @param {T[]} array
 * @param {T} find
 * @returns {number}
 */
export function interpolationSearch(array, find) {
    let start = 0;
    let end = array.length - 1;
    if (end < 0) {
        return invert(0);
    }
    while (start <= end) {
        if (find < array[start]) {
            return invert(start);
        } else if (find > array[end]) {
            return invert(end + 1);
        }
        const hi = array[end] - array[start];
        if (hi === 0) {
            return start;
        }
        const lo = find - array[start];
        const pivot = Math.round((lo / hi) * (end - start) + start);
        if (find === array[pivot]) {
            return pivot;
        } else if (find > array[pivot]) {
            start = pivot + 1;
        } else {
            end = pivot - 1;
        }
    }
}
