import Queue from './queue.js'

class PrintManager {
    constructor() {
        this.queue = new Queue()
    }

    // add job to the printing queue
    queueJob(document) {
        this.queue.enqueue(document)
    }

    // run the printing job
    run() {
        // should print till the queue is non-empty
        while (this.queue.read()) {
            print(this.queue.dequeue())
        }
        console.log('done!!!')
    }
}

// helper to print document
function print(document) {
    console.log(document)
}

const newJob = new PrintManager()
newJob.queueJob('First job printing.....')
newJob.queueJob('Second job printing.....')
newJob.queueJob('Third job printing.....')
newJob.run()