export function forever(callback, param) {
    while (!callback(param));
}

export function loop(times, callback) {
    for (let i = 0; i < times && !callback(i); i++);
}
