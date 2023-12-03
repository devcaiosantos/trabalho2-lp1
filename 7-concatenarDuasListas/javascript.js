function concatenarListas(lista1, lista2) {
    // Criar uma nova lista para armazenar a concatenação
    var resultado = [];
  
    // Adicionar elementos da primeira lista à nova lista
    for (var i = 0; i < lista1.length; i++) {
      resultado.push(lista1[i]);
    }
  
    // Adicionar elementos da segunda lista à nova lista
    for (var j = 0; j < lista2.length; j++) {
      resultado.push(lista2[j]);
    }
  
    return resultado;
  }
  
  // Exemplo de uso:
  var listaA = [1, 2, 3];
  var listaB = [4, 5, 6];
  var resultadoConcatenado = concatenarListas(listaA, listaB);
  
  console.log(resultadoConcatenado);

  