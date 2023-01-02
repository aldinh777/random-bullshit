export function randomNumber(range) {
    return Math.floor(Math.random() * range);
}

export function randomItem(array) {
    return array[randomNumber(array.length)];
}
