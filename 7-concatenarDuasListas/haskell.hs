concatLists::[Integer]->[Integer]->[Integer]

concatLists [] [] = []

concatLists [] (hb:tb)
        | tb == [] = hb : []
        | otherwise = hb : concatLists [] tb

concatLists (ha:ta) []
        | ta == [] = ha : []
        | otherwise = ha : concatLists ta []

concatLists (ha:ta) (hb:tb)
        | ta == [] = ha : (concatLists [] (hb:tb))
        | otherwise = ha : (concatLists ta (hb:tb))

-- Exemplo de uso:
main :: IO ()
main = do
    let listaA = [1, 2, 3]
    let listaB = [4, 5, 6]
    let resultadoConcatLists = concatLists listaA listaB
    print resultadoConcatLists 