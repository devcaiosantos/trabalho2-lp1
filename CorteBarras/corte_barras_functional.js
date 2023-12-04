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

function firstFind(capacidade, pedidos) {
    pedidos.sort((a, b) => b - a);

    let barras = [[]];

    for (let item of pedidos) {
            let cortou = false;
            
            for (let barra of barras) {
                    if (
                            barra.reduce((sum, i) => sum + i, 0) + item <=
                            capacidade
                    ) {
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