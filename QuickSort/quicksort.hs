quicksort::[Integer]->[Integer]
quicksort [] = []
quicksort (h:t) = quicksort lessThanOrEqualTo ++ [h] ++ quicksort greaterThan
    where
        lessThanOrEqualTo = filter (<=h) t
        greaterThan = filter (>h) t