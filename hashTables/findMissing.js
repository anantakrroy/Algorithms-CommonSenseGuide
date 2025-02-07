function findMissingAlphabet(str) {
    const lowercased = str.toLowerCase()
    // create a hash map of all alphabets in the string (lowercased for accuracy)
    let hashTable = {}

    for(let ch of lowercased) {
        if(ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122)
            hashTable[ch] = hashTable[ch] ? hashTable[ch]++ : (hashTable[ch] = 1)
    }

    // create an array of all alphabets
    const alphabets = new Array(26).fill(97).map((e,i) => String.fromCharCode(e+i))

    // iterate over the alphabets and check if it exists in the hash table
    for(let ch of alphabets) {
        if(!hashTable[ch]) {
            return ch
        }
    }
}

console.log(findMissingAlphabet('A brown fox'));