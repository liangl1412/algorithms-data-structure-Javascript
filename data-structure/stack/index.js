class Stack {
    items = {}
    count = 0;
    push = (value) => {
        this.count++;
        this.items[this.count] = value;
    }

    pop = (value) => {
        if (!this.count) {
            return undefined;
        }
        const result = this.items[this.count];
        delete this.items[this.count];
        this.count--;
        return result;
    }

    peek = () => {
        return this.items[this.count];
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(6);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
