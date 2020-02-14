# Stack
A stack of books, the top first book is the last one you put(First in Last out)
For array, push will add element to the last, pop will take away element from the last

## Example
```javascript
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
console.log(stack.peek()); //6
console.log(stack.pop()); //6
console.log(stack.peek()); //2
```

## Resource
https://www.youtube.com/watch?v=t2CEgPsws3U