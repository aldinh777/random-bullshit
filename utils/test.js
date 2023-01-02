export function sortedTest(name, array, sorter = (x, y) => x < y) {
    for (let i = 0; i < array.length - 1; i++) {
        if (!sorter(array[i], array[i + 1])) {
            const items = array.slice(0, 20) + (array.length > 20 ? ',...' : '');
            console.error(name + ' : unsorted');
            console.error('items => [' + items + ']');
        }
    }
    console.log(name + ' : sorted');
}

export function timedTest(name, callback) {
    const start = new Date();
    callback();
    const end = new Date();
    console.log(name + ' : ' + (end - start) + 'ms');
}
