function binarySearch(arr, val) {
    let low = 0;
    let high = arr.length - 1;

    while(low <= high) {
        let mid = Math.floor(low + (high - low)/2)
        if(val > mid) {
            low = mid + 1
        } else if(val < mid) {
            high = mid - 1
        } else if(val == mid) {
            return mid
        }
    }
    
    // val not found in array
    return -1
}