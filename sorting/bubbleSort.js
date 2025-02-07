// largest value bubbles to the end of the array in each pass

function bubbleSort(arr) {
    let pass = 0;

    while(pass < arr.length) {
        console.log(`Pass >>> ${pass}`)
        let swapCount = 0;
        for(let i = 0; i < arr.length - 1 - pass; i++) {
            if(arr[i] > arr[i+1]) {
                // swap the values
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapCount++ 
            }
        }
        console.log(`Arr is now >> ${arr} \n`);
        pass++;
        if(swapCount == 0) 
        // exit the loop, array is now sorted
            break;
    }

    return arr
}

console.log(bubbleSort([4,2,7,1,3]))