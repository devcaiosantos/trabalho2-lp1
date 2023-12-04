const fs = require("fs");

function readInputFile(filename) {
        try {
                const content = fs.readFileSync(filename, "utf-8");
                return content.split(" ").map(Number);
        } catch (error) {
                console.error("Erro ao ler o arquivo:", error.message);
                return [];
        }
}

function swap(array, i, j) {
    let aux = array[i];
    array[i] = array[j];
    array[j] = aux;
}

function partition(array, p, r) {
    let i = p - 1;
    let x = array[r];
    for (let j = p; j < r; j++) {
            if (array[j] > x) {
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

function copyArray(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
            result[i] = array[i];
    }

    return result;
}

function fits(arrayToSum, elementToFit, maximum) {
    let sum = 0;

    for (let i = 0; i < arrayToSum.length; i++) {
            sum += arrayToSum[i];
    }

    if (sum >= maximum) return false;

    return sum + elementToFit >= maximum;
}

function firstFind(capacidade, pedidos) {
    const array = copyArray(pedidos);
    quicksort(array);

    let barras = [[]];

    for (let item of array) {
            let cortou = false;

            for (let barra of barras) {
                    if (fits(barra, item, capacidade)) {
                            barra.push(item);
                            cortou = true;
                            break;
                    }
            }

            if (!cortou) {
                    barras.push([item]);
            }
    }

    return barras;
}

let array = readInputFile("entrada.in");

const tamanho_barra = 10;
const barras = firstFind(tamanho_barra, array);

console.log("Barras:", barras);