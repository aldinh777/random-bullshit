/**
 * Compare each items to ensure it was sorted
 */
export function sortedTest<T>(name: string, array: T[], sorter: (x: T, y: T) => boolean): void;

/**
 * Run towards heaven and check how long it takes
 */
export function timedTest(name: string, callback: () => any): void;
