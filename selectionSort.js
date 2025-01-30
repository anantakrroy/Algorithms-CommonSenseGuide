function selectionSort(arr) {
    for(let i = 0 ; i < arr.length - 1; i++) {
        let least = i
        // keep track of least value index
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[least])
                least = j
        }
        // swap values if the least value is not in index i
        if(least !== i) {
            let temp = arr[i]
            arr[i] = arr[least]
            arr[least] =  temp
            console.log(`After pass ${i+1} ; array is >>> ${arr}`);
        }
    }
    return arr
}

console.log(selectionSort([1, 4,2,7,1,3]))