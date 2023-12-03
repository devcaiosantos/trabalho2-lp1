produtoLista::[Integer]->Integer
produtoLista [] = 1
produtoLista (h:t) = h * produtoLista t

-- Exemplo de uso:
main :: IO ()
main = do
    let listaA = [1, 2, 3]
    let resultadoProdutoLista = produtoLista listaA
    print resultadoProdutoLista 