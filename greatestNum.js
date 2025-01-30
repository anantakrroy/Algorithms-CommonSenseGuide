function greatestNum(arr) {
    // O(N^2) complexity
    // for(let i of arr) {
    //     let isIGreatestVal = true
    //     for(let j of arr) {
    //         if(j > i) {
    //             isIGreatestVal = false
    //         }
    //     }
    //     // return "i" is greatest if no other number was greater than it
    //     if(isIGreatestVal)
    //         return i;
    // }

    // TODO - write O(N) algorithm
    let greatest = Number.MIN_SAFE_INTEGER

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > greatest)
            greatest = arr[i]    
    }

    return greatest
}

console.log(greatestNum([3,16,7,4,10]))