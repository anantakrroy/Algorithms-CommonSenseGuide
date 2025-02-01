function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let tempVal = arr[i]
        let gapAt = i
        let j = i - 1

        while(tempVal < arr[j]) {
            // Shift the element to the right
            arr[j + 1] = arr[j]
            // shift the gap to the left
            gapAt--
            // move index to previous element to compare
            j--
        }
        // Assign element at 'gap' the 'temp value'
        arr[gapAt] = tempVal
    }
    return arr
}

console.log(insertionSort([4,2,7,1,3]))
console.log(insertionSort([-4,20,73,21,3]))
console.log(insertionSort([38,6433,64,312,77,2132,38]))