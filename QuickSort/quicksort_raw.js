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

/* VALORES TESTADOS USANDO O REPLIT
  3.5M ~ 1s
  17M.5 ~ 10s
  42M ~ 1min
  */
let n = 42000000;
let array = generateRandomArray(n, 0, 100000);

let startTime = new Date();

quicksort(array);

let endTime = new Date();

let timeElapsed = endTime - startTime;

console.log(`Time elapsed: ${timeElapsed} ms`);
