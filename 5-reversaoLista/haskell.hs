reverselist::[Integer]->[Integer]
reverselist [] = []
reverselist (h:t) = reverselist t ++ [h]

-- Exemplo de uso:
main :: IO ()
main = do
    let listaA = [1, 2, 3, 4, 5]
    let resultReverselist = reverselist listaA
    print resultReverselist 