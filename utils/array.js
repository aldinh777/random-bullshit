export function generateArray(length, generator) {
    return [...Array(length)].map(generator);
}

export function pushNonExists(array, elem) {
    if (array.indexOf(elem) === -1) {
        array.push(elem);
    }
}

export function removeFromArray(array, elem) {
    const index = array.indexOf(elem);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

export function swapArray(array, x, y) {
    const temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}
