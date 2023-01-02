import { invert } from '../utils/math.js';

export function bruteForceSearch(array, find) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === find) {
            return i;
        }
    }
    return invert(array.length);
}

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
