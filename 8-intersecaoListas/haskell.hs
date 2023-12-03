intersecaoListas :: Eq a => [a] -> [a] -> [a]
intersecaoListas [] _ = []
intersecaoListas (x:xs) lista2
    | elem x lista2 = x : intersecaoListas xs lista2
    | otherwise = intersecaoListas xs lista2

-- Exemplo de uso:
main :: IO ()
main = do
    let listaA = [1, 2, 3, 4, 5]
    let listaB = [3, 4, 5, 6, 7]

    let resultadoIntersecao = intersecaoListas listaA listaB
    print resultadoIntersecao -- Saída: [3, 4, 5]
