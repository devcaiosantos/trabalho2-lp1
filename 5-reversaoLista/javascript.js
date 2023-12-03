function reverterLista(lista) {
    const tamanho = lista.length;
    if(!tamanho) return []
    let resultado = []
    for(let i = tamanho; i > 0; i--){
    resultado.push(lista[i-1])
    }
    return resultado
}

// Exemplo de uso:
const listaA = [1, 2, 3, 4, 5];

console.log(reverterLista(listaA)); 