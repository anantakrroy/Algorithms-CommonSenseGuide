function firstNonDuplicate(str) {
    //  create a hash table and record occurence of each char of str
    let hashTable = {}

    for(let ch of str) {
        if(hashTable[ch]) {
            hashTable[ch]++
        } else {
            hashTable[ch] = 1
        }
    }

    // return the 1st key which has value of 1 in the hashtable
    for(let ch of str) {
        if(hashTable[ch] === 1)
            return ch
    }
    // return undefined if all chars are duplicate in str eg. 'blablabla'
    return undefined
}

console.log(firstNonDuplicate("minimum"));