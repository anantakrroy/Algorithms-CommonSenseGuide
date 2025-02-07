function intersectionArray(arrA, arrB) {
    // find the common elements in the input arrays
    // Input arrays might not be equal length. Then it makes sense to first create hash map of larger array
    // Another point is array might contain repeated elements. Hence hash table can include frequency of elements
    // of larger array. Can be useful later
    let largeArr = larger(arrA, arrB)
    let smallArr = smaller(arrA, arrB)

    let hashTable = {}

    for(let el of largeArr) {
        if(hashTable[el])
            hashTable[el]++
        else
            hashTable[el] = 1
    }

    // Iterate over smaller array and check if each element exists in the larger array, if it does push to result
    let result = []

    for(let el of smallArr) {
        if(hashTable[el])
            result.push(el)
    }

    return result
}

function larger(A,B) {
    return A.length >= B.length ? A : B
}

function smaller(A,B) {
    return A.length < B.length ? A : B
}

console.log(intersectionArray([2,4,6,8,45,67],[1,3,5,7,13]));