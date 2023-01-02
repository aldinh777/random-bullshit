export function invert(i) {
    return -i - 1;
}

export function sensify(i) {
    return i < 0 ? invert(i) : i;
}
