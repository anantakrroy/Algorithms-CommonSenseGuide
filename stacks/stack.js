class Stack {
    constructor() {
        this.data = []
        this.length = this.data.length
    }

    push(element) {
        this.data[this.length] = element
        this.length++
        // return this.data
    }

    pop() {
        const removed = this.data[this.length - 1]
        this.data = this.data.slice(0,this.length - 1)
        this.length--
        return removed
    }

    read() {
        return this.data[this.length - 1]
    }
}

// const newStack = new Stack()
// newStack.push(10)
// newStack.push(30)
// newStack.push(50)
// newStack.push(60)

// console.log(newStack);
// newStack.pop()
// newStack.push(23)
// console.log(newStack);
// console.log(newStack.read())
// console.log(newStack.pop())

export default Stack