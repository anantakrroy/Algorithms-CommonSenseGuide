class Queue {
    constructor() {
        this.data = []
    }

    // add data to the end of queue
    enqueue(element) {
        this.data.push(element)
    }

    // remove data from the front of queue
    dequeue() {
        const removed = this.data.shift()
        return removed
    }

    // read data from queue
    read() {
        return this.data[0]
    }

    // length of queue
    length() {
        return this.data.length
    }
}

const queue = new Queue()
console.log(queue.length());
queue.enqueue(10)
queue.enqueue(60)
queue.enqueue(40)
queue.dequeue()
console.log(queue)
console.log(queue.length())
console.log(queue.read());

export default Queue