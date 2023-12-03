estaNaLista::[Integer]->Integer->Bool
estaNaLista [] el = False
estaNaLista (h:t) el
    | h == el = True
    | otherwise = estaNaLista t el

-- Exemplo de uso:
main :: IO ()
main = do
    let listaA = [1, 2, 3, 4, 5]
    let resultadoEstaNaLista = estaNaLista listaA 6
    print resultadoEstaNaLista 