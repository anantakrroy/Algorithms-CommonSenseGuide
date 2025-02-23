// print all the numbers in nested array
function print(arr) {
    for (let el of arr) {
        // print the number if element is just number
        if (!Array.isArray(el))
            console.log(el)
        else {
            print(el)
        }
    }
}

console.log(print([1, 2, 3,
    [4, 5, 6],
    7,
    [8,
        [9, 10, 11,
            [12, 13, 14]
        ]],
    [15, 16, 17, 18, 19,
        [20, 21, 22,
            [23, 24, 25,
                [26, 27, 29]
            ], 30, 31], 32
    ], 33]))