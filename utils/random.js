const CHARACTERS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function randomString(length = 1) {
    let result = '';
    for (let index = 0; index < length; index++) {
        result += randomItem(CHARACTERS);
    }
    return result;
}

export function randomNumber(range) {
    return Math.floor(Math.random() * range);
}

export function randomItem(array) {
    return array[randomNumber(array.length)];
}

