class MinStack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        const currentMin = this.stack.length === 0 ? val : this.getMin();
        const newMin = Math.min(val, currentMin);
        this.stack.push({ value: val, min: newMin });
    }

    pop() {
        this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1].value;
    }

    getMin() {
        return this.stack[this.stack.length - 1].min;
    }
}
