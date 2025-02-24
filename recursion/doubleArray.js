function double(arr, idx = 0) {
    if(idx > arr.length - 1)
        return
    arr[idx] *= 2
    double(arr, idx + 1)
}

let arr = [2,3,4,5,7,8]
double(arr)
console.log(arr)