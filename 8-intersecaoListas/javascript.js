function intersecaoListas(lista1, lista2) {
    const resultado = [];

    for (const elemento1 of lista1) {
        for (const elemento2 of lista2) {
            if (elemento1 === elemento2) {
                resultado.push(elemento1);
                break;
            }
        }
    }
    
    return resultado;
}

// Exemplo de uso:
const listaA = [1, 2, 3, 4, 5];
const listaB = [3, 4, 5, 6];

const resultadoIntersecao = intersecaoListas(listaA, listaB);
console.log(resultadoIntersecao); // Saída: [3, 4, 5]