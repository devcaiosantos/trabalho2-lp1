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



let array = readInputFile("entrada.in");

// precisa de reatribuição pois o concat não retorna uma shallow-copy igual o filter, e sim um novo array
array = quicksort(array);