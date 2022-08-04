class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enQueue(item) {
        this.stack1.push(item);
    }

    deQueue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length !== 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        if (this.stack2.length === 0) return -1;
        return this.stack2.pop();
    }

    peek() {
        return this.stack2[this.stack2.length - 1];
    }

}


const input = [
    5,
    1, 2,
    1, 3,
    2,
    1, 4,
    2,
]

const queue = new Queue();
for (let i = 1; i < input.length; i++) {
    if (input[i] == 1) {
        queue.enQueue(input[i + 1]);
        i++;
    } else if (input[i] == 2) {
        console.log(queue.deQueue());
    }
}

// output
// 2
// 3