listsAreEqual::[Integer]->[Integer]->Bool
listsAreEqual [] [] = True
listsAreEqual (ha:ta) (hb:tb)
        | ha /= hb = False
        | otherwise = listsAreEqual ta tb

-- Exemplo de uso:
main :: IO ()
main = do
    let listaA = [1, 2, 3, 4, 5]
    let listaB = [1, 2, 3, 4, 5]
    let resultadolistsAreEqual = listsAreEqual listaA listaB
    print resultadolistsAreEqual 
