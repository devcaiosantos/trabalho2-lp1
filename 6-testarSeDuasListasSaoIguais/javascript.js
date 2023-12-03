function saoListasIguais(lista1, lista2) {
    // Verifica se ambas as listas têm o mesmo comprimento
    if (lista1.length !== lista2.length) {
      return false;
    }

    // Percorre os elementos das listas e compara cada um
    for (let i = 0; i < lista1.length; i++) {
      // Se um elemento for diferente, as listas não são iguais
      if (lista1[i] !== lista2[i]) {
        return false;
      }
    }

    // Se todas as comparações passarem, as listas são iguais
    return true;
  }
  
  // Exemplo de uso:
  const listaA = [1, 2, 3];
  const listaB = [1, 2, 3];

  console.log(saoListasIguais(listaA, listaB));