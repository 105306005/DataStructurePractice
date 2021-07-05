// Stack with Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      let prevNode = this.top;
      this.top = newNode;
      this.top.next = prevNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      // only one item
      this.bottom = null;
    }

    const prevNode = this.top;
    this.top = this.top.next;
    this.length--;
    return prevNode;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("youtube");
myStack.push("test");
console.log(myStack.pop());
console.log(myStack.push("stackOverFlow"));
