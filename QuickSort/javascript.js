function generateRandomArray(length, min, max) {
    return Array.from(
            { length },
            () => Math.floor(Math.random() * (max - min + 1)) + min
    );
}

function swap(array, i, j) {
    let aux = array[i];
    array[i] = array[j];
    array[j] = aux;
}

function partition(array, p, r) {
    let i = p - 1;
    let x = array[r]; // pivot
    for (let j = p; j < r; j++) {
            if (array[j] <= x) {
                    i++;
                    swap(array, i, j);
            }
    }
    swap(array, i + 1, r);
    return i + 1;
}

function __quicksort(array, p, r) {
    if (p < r) {
            let q = partition(array, p, r);
            __quicksort(array, p, q - 1);
            __quicksort(array, q + 1, r);
    }
}

function quicksort(array) {
    __quicksort(array, 0, array.length - 1);
}


let array_1s = generateRandomArray(5100000, 0, 100000); // 7 milhões ~ 1 segundo
// let array_10s = generateRandomArray(7000000, 0, 100000);
// let array_1m = [5, 2, 4, 6, 1, 3];

let startTime = new Date();

quicksort(array_1s);

let endTime = new Date();

let timeElapsed = endTime - startTime;

console.log(`Time elapsed: ${timeElapsed} ms`);