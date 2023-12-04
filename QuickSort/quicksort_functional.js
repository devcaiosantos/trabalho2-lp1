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

function quicksort(array) {
        if (array.length <= 1) {
                return array;
        } else {
                //diferente da primeira implementação que é sem o uso das formas funcionais
                // aqui usamos o pivot como sendo o primeiro elemento do array
                let h = array[0];
                let t = array.slice(1);

                let lessThanOrEqualTo = t.filter((element) => element <= h);
                let greaterThan = t.filter((element) => element > h);

                return quicksort(lessThanOrEqualTo).concat(
                        [h],
                        quicksort(greaterThan)
                );
        }
}

let array = readInputFile("entrada.in");

// precisa de reatribuição pois o concat não retorna uma shallow-copy igual o filter, e sim um novo array
array = quicksort(array)