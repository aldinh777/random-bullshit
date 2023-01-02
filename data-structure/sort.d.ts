/**
 * Bubble the largest value to the last index, one by one
 */
export function bubbleSort<T>(array: T[]): T[];

/**
 * Select the smallest value and put it at first index
 */
export function selectionSort<T>(array: T[]): T[];

/**
 * Create new array and insert item accordingly
 */
export function insertionSort<T>(array: T[], search?: (array: T[], find: T) => number): T[];

/**
 * Imagine sorting a tree instead of array
 */
export function heapSort<T>(array: T[]): T[];

/**
 * Let's just slice the array to make it easier to sort
 */
export function mergeSort<T>(array: T[], start?: number, end?: number): T[];

/**
 * It's like merge sort but usually faster
 */
export function quickSort<T>(array: T[], start?: number, end?: number): T[];
