// Queue with Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    if (this.length === 0) {
      return null;
    }
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      this.last = null;
    }

    let dequeueItem = this.first;
    this.first = this.first.next;
    this.length--;

    return dequeueItem;
  }
}

const myQueue = new Queue();
myQueue.enqueue("A");
myQueue.enqueue("B");
myQueue.enqueue("C");
myQueue.dequeue();
console.log(myQueue.peek());
console.log(myQueue.enqueue("Z"));
