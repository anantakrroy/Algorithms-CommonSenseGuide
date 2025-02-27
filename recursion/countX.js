// count the number of X's in the string
function countX(str) {
    // console.log(`calling with str = ${str}`)
    // base case - when str is length 1 
    // if(str.length == 1) {
    //     if(str[0] == 'x')
    //         return 1
    //     else
    //         return 0
    // }

    // improved base case
    if(str.length === 0)
        return 0

    // subproblem - call count on rest of string except 1st char, add 1 to count if 1st char is 'x'
    if(str[0] == 'x') {
        return 1 + countX(str.substring(1))
    } else {
        return countX(str.substring(1))
    }
}

console.log(countX('dssjksjskdj'))