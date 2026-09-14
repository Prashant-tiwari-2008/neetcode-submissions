class MyStack {
    constructor() {
         this.q = null;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        const newQueue = new Queue();
        newQueue.enqueue(x);
        newQueue.enqueue(this.q);
        this.q = newQueue;
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.q === null) return -1;

        const top = this.q.dequeue();
        this.q = this.q.dequeue();
        return top;
    }

    /**
     * @return {number}
     */
    top() {
        if (this.q === null) return -1;
        return this.q.front();
    }

    /**
     * @return {boolean}
     */
    empty() {
       return this.q === null;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
