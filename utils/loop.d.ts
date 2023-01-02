/**
 * Loop until it returns something positive
 */
export function forever<T>(callback: (param: T) => any, param: T): void;

/**
 * Loop a bunch of times, or until it returns something positive
 */
export function loop<T>(times: number, callback: (i: number) => any): void;
