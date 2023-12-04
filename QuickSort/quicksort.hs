import Data.Time

quicksort::[Integer]->[Integer]
quicksort [] = []
quicksort (h:t) = quicksort lessThanOrEqualTo ++ [h] ++ quicksort greaterThan
    where
        lessThanOrEqualTo = filter (<=h) t
        greaterThan = filter (>h) t

main :: IO ()
main = do
    content <- readFile "entrada.in"
    let listaDesordenada = map read (words content) :: [Integer]
    let listaOrdenada = quicksort listaDesordenada
    print(length listaOrdenada)
