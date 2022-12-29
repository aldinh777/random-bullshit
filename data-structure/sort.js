import { binarySearch } from './search.js';
import { sensify } from '../utils/math.js';
import { swapArray } from '../utils/array.js';

/**
 * Bubble the largest value to the last index, one by one
 * @param {T[]} array
 * @returns {T[]}
 */
export function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                swapArray(array, j, j + 1);
            }
        }
    }
    return array;
}

/**
 * Select the smallest value and put it at first index
 * @param {T[]} array
 * @returns {T[]}
 */
export function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                swapArray(array, i, j);
            }
        }
    }
    return array;
}

/**
 * Create new array and insert item accordingly
 * @param {T[]} array
 * @param {(array: T[], find: T) => number} search
 * @returns {T[]}
 */
export function insertionSort(array, search = binarySearch) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.splice(sensify(search(result, array[i])), 0, array[i]);
    }
    return result;
}

/**
 * Imagine sorting a tree instead of array
 * @param {T[]} array
 * @returns {T[]}
 */
export function heapSort(array) {
    const hippy = (i, range) => {
        let current = i;
        let next = i;
        while (true) {
            current = next;
            let children = 2 * current + 1;
            if (children + 1 <= range) {
                const bigger = array[children] > array[children + 1] ? children : children + 1;
                if (array[current] < array[bigger]) {
                    swapArray(array, current, bigger);
                    next = bigger;
                }
            } else if (children <= range) {
                if (array[current] < array[children]) {
                    swapArray(array, current, children);
                    next = children;
                }
            }
            if (current === next) {
                break;
            }
        }
    };
    for (let i = array.length - 1; i >= 1; i--) {
        const parent = Math.floor((i - 1) / 2);
        if (array[parent] < array[i]) {
            swapArray(array, parent, i);
            hippy(i, array.length);
        }
    }
    for (let range = array.length - 1; range >= 0; range--) {
        hippy(0, range);
        swapArray(array, 0, range);
    }
    return array;
}

/**
 * Let's just slice the array to make it easier to sort
 * @param {T[]} array
 * @param {number} start
 * @param {number} end
 * @returns {T[]}
 */
export function mergeSort(array, start = 0, end = array.length - 1) {
    if (end - start < 1) {
        return array;
    }
    const divider = Math.floor((end - start) / 2) + start;
    mergeSort(array, start, divider);
    mergeSort(array, divider + 1, end);
    let i = start;
    let j = divider + 1;
    const temp = [];
    while (i < divider + 1 && j < end + 1) {
        if (array[i] > array[j]) {
            temp.push(array[j]);
            j++;
        } else {
            temp.push(array[i]);
            i++;
        }
    }
    temp.push(...array.slice(i, divider + 1));
    temp.push(...array.slice(j, end + 1));
    for (let i = 0; i < temp.length; i++) {
        array[start + i] = temp[i];
    }
    return array;
}

/**
 * It's like merge sort but usually faster
 * @param {T[]} array
 * @param {number} start
 * @param {number} end
 * @returns {T[]}
 */
export function quickSort(array, start = 0, end = array.length - 1) {
    if (end - start < 1) {
        return array;
    }
    let pivot = array[start];
    let bound = start;
    for (let i = start + 1; i <= end; i++) {
        if (pivot > array[i]) {
            bound++;
            swapArray(array, i, bound);
        }
    }
    swapArray(array, bound, start);
    quickSort(array, start, bound - 1);
    quickSort(array, bound + 1, end);
    return array;
}
