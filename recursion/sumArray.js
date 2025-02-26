// function sumOfArray(arr, idx = 0, sum = 0) {
//     //  this is recursion but bottom-top approach similar to looping
//     // this approach does not bring any advantage compared to using loops
//     if(idx === arr.length)
//         return sum;
//     return sumOfArray(arr, idx + 1, sum += arr[idx])
// }

//  the approach below is top-down where recursion shines
//  solving subproblems 
function sumOfArray(arr) {
    console.log(`calling with arr = ${arr}`)
    if(arr.length == 1)
        return arr[0]
    return arr[0] + sumOfArray(arr.slice(1))
}

console.log(sumOfArray([10,20,30,40,50]))