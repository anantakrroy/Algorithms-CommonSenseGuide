// function to reverse a string using Stack

class Stack {
    constructor() {
        this.data = []
    }

    push(val) {
        this.data.push(val)
    }

    pop() {
        return this.data.pop()
    }

    read() {
        return this.data[this.data.length - 1]
    }

    size() {
        return this.data.length
    }
}

function reverseString(str) {
    // 'abcde' becomes 'edcba'
    let result = ''
    let tempStack = new Stack()

    // iterate over string and push each char to stack
    for(let char of str) {
        tempStack.push(char)
    }

    // pop from the stack and append to 'result', since stack pop is LIFO , appending to result is 
    // guaranteed to be reversing a string
    while(tempStack.read()) {
        result += tempStack.pop()
    }

    return result
}

console.log(reverseString('abcde'));