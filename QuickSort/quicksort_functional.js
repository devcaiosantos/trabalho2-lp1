function generateRandomArray(length, min, max) {
        return Array.from(
                { length },
                () => Math.floor(Math.random() * (max - min + 1)) + min
        );
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

                return quicksort(lessThanOrEqualTo).concat([h], quicksort(greaterThan));

        }
}


/*
7M ~ 1s
 ~ 10s
? ~ 1min
*/
let n = 75000;
let array = generateRandomArray(n, 0, 100000);

let startTime = new Date();

// precisa de reatribuição pois o concat não retorna uma shallow-copy igual o filter, e sim um novo array
array = quicksort(array);

let endTime = new Date();

let timeElapsed = endTime - startTime;

console.log(`Time elapsed: ${timeElapsed} ms`);