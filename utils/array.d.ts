/**
 * Generate array and fill it with something sus ඞ
 */
export function generateArray<T>(length: number, generator: () => T): T[];

/**
 */
export function pushNonExists<T>(array: T[], elem: T): void;

/**
 * remove item from an array if item exists in that array
 */
export function removeFromArray<T>(array: T[], elem: T): void;

/**
 * Swap an item of array into another
 */
export function swapArray<T>(array: T[], x: number, y: number): void;
