// find the number of path up N steps if one can climb 1,2 or 3 stairs at a time
function staircase(N) {
    // BASE case
    //  if N = 1, there is only 1 way to climb
    //  if N = 2, there are 2 ways {1+1 or 2} to climb
    // Recursive case
    // For N = 11, problem is same as climbing 10 stairs and then 1 jump takes to 11
    // also, problem is same as climbing 9 stairs jumping 2 OR climbing 8 stairs jumping 3
    // No. of ways is then ATLEAST C(10) + C(9) + C(8)

    if(N <= 0)
        return 0
    if(N == 1 || N == 2)
        return N
    return staircase(N - 1) + staircase(N - 2) + staircase(N - 3)
}

console.log(staircase(7))