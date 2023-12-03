somaLista::[Integer]->Integer
somaLista [] = 0
somaLista (h:t) = h + somaLista t

-- Exemplo de uso:
main :: IO ()
main = do
    let listaA = [1, 2, 3]
    let resultadoSomaLista = somaLista listaA
    print resultadoSomaLista 