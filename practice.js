// Binary search - only for ordered array
function binarySearch(elem, arr) {
    // start, end indices
    let start = 0
    let end = arr.length - 1

    // shift start or end depending on where the elem lies in arr till the start idx is less than end idx
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2)
        console.log('mid : ', mid);
        if (elem > arr[mid]) {
            start = mid + 1
        } else if (elem < arr[mid]) {
            end = mid - 1
        } else if (elem == arr[mid]) {
            return mid
        }
    }
    return -1
}

console.log(binarySearch(12, [0, 4, 12, 34, 55, 67, 89, 100, 234]));


// SORTING

// bubble sort - highest values bubbles to top
function bubbleSort(arr) {
    // keep track if any 'swaps' performed ; 'swaps' false means array is now sorted
    let swaps = true
    // keep track of element till which to sort array
    let doneIdx = 0

    while(swaps) {
        swaps = false
        // iterate from array idx 0 to 1 less on every run
        for(let i = 0; i < arr.length - 1 - doneIdx; i++) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp 
                swaps = true // since swap has occured
            }
        }
        doneIdx++ // highest element keep 'bubbling' to the end ; hence array over which sorting is needed keeps reducing
    }
    return arr
}

console.log(bubbleSort([10,8,7,5,3,1]));

// selection sort -  lowest value is moved to the beginning of the array on each pass through the array
function selectionSort(arr) {
    // i here is the pass count 
    for(let i = 0; i < arr.length - 1; i++) {
        let lowestIdx = i
        // inner loop responsible for comparing values
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowestIdx]) {
                lowestIdx = j
            }
        }
        // swap the values if lowestIdx is not "i"
        if(lowestIdx !== i) {
            let temp = arr[i]
            arr[i] = arr[lowestIdx]
            arr[lowestIdx] = temp 
        }
    }
    return arr
}

console.log(selectionSort([38,23,10,7,4,2,0]))

// Insertion sort - take out a value from idx 1 onwards, compare with value to its left ; if greater keep shifting those values to the right, insert the value in the right gap
function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currVal = arr[i] // current value to compare to, gap is now at position "i"
        let gap = i
        // shifting
        for(let j = i - 1; j >= 0; j--) {
            if(arr[j] > currVal) {
                arr[j+1] = arr[j] // greater value is shifted to the right , hence gap shifts to left
                gap--
            } else {    // if a smaller value is encountered no need to go further
                break
            }
        }
        arr[gap] = currVal
    }
    return arr
}

console.log(insertionSort([34,31,25,15,9,7,5,0]))