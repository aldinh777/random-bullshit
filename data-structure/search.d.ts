/**
 * Check every items until item found
 */
export function bruteForceSearch<T>(array: T[], find: T): number;

/**
 * Check every items linearly, assuming array are sorted
 */
export function linearSearch<T>(array: T[], find: T): number;

/**
 * Slice array in half, slice it again, again and again until it find the value
 */
export function binarySearch<T>(array: T[], find: T): number;

/**
 * Magically guess the expected index and slice array from there, over and over
 */
export function interpolationSearch<T>(array: T[], find: T): number;
