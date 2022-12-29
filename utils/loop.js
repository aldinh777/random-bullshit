/**
 * Loop until it returns something positive
 * @param {(T) => any} callback
 * @param {T} param
 */
export function forever(callback, param) {
    while (!callback(param));
}

/**
 * Loop a bunch of times, or until it returns something positive
 * @param {number} times
 * @param {(i: number) => any} callback
 */
export function loop(times, callback) {
    for (let i = 0; i < times && !callback(i); i++);
}
