function firstDuplicate(arr) {
    // brute force would be to choose character by character and they iterate over the array to find if character
    // occurs. But in worst case that would be O(N^2) if duplicate is not found. So we need to use hash map for 
    // O(N) complexity. 
    
    // NOTE --- nsertion order of keys in JS object is maintained only if the keys are strings. If they
    // are string representation of numeric types eg. "2","5" etc then JS object first organises these keys in
    // ascending order. To maintain insertion order in JS, Map is used.

    // let hashTable = new Map()
    let hashTable = {}

    for(let el of arr) {
        // if the string is found in hash table return it since it is guaranteed to be the 1st instance of repeat
        if(hashTable[el]) {
            return el
        } else {
            hashTable[el] = 1
        }
    }
    // if loop ends and string duplicate is not found
    return false
}

console.log(firstDuplicate(['a','b','c','d','e','c','f']));
console.log(firstDuplicate(['a','c','b','2','e','c','2']));