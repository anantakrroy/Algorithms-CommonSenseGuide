function countdownTimer(num) {
    if(num === 0)
        return
    else {
        console.log(num);
        countdownTimer(num - 1)
    }
}

console.log(countdownTimer(10));