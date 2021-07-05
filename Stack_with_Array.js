// Stack with Array

class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    if (this.array.length == 0) {
      return null;
    }
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    if (this.array.length == 0) {
      return null;
    }
    return this.array.pop();
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("youtube");
console.log(myStack.peek());
myStack.push("test");
console.log(myStack.pop());
console.log(myStack.push("stackOverFlow"));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

console.log(myStack.peek());
