// find the sum of all integers between low and high

function calculateSum(low, high) {
    // base case : when the high value reaches low
    if(low === high)
        return low
    return high + calculateSum(low , high - 1)
}

console.log(calculateSum(1,10))