function isArraySubset(arrA, arrB) {
    // Find the larger array of the two
    let largeArr;
    let smallArr;

    if(arrA.length >= arrB.length) {
        largeArr = arrA
        smallArr = arrB
    } else {
        largeArr = arrB
        smallArr = arrA
    }

    // Construct hash table of large array
    let hashTable = {}
    for(let el of largeArr) {
        hashTable[el] = true
    }

    // Check if any element of small array does not exist in the large array
    for(let el of smallArr) {
        if(!hashTable[el]) {
            return false
        }
    }
    return true
}

console.log(isArraySubset(['a','b','c','d','e','f'], ['b','c','e','z']));