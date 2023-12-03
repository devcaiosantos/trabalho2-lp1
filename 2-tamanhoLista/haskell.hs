tamanhoLista::[Integer]->Integer
tamanhoLista [] = 0
tamanhoLista (h:t) = 1 + tamanhoLista t

-- Exemplo de uso:
main :: IO ()
main = do
    let listaA = [1, 2, 3, 4, 5]
    let resultadoTamanhoLista = tamanhoLista listaA
    print resultadoTamanhoLista 
