function calcularProduto(lista) {
    // Verificar se a lista está vazia
    if (lista.length === 0) {
      return null; // ou lançar uma exceção, dependendo dos requisitos
    }
  
    // Inicializar o produto como 1
    let produto = 1;
  
    // Iterar sobre a lista e multiplicar cada elemento pelo produto acumulado
    for (let i = 0; i < lista.length; i++) {
      produto *= lista[i];
    }
    return produto;
  }
  
  // Exemplo de uso
console.log(calcularProduto([1,2,3]));