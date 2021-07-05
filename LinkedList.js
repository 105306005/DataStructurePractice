//example: 10 --> 5 --> 16

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    //example: 1 --> 10 --> 5 --> 16
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    //print out my linked list as a array as a reference
    const myArray = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      myArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return myArray;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      //loop through the linked list
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(index, value) {
    //   example insert(2, 99): 1 --> 10 --> 99 --> 5 --> 16
    if (index === 0) {
      this.prepend(value);
      return this;
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1);

    let temp = leader.next;
    leader.next = newNode;
    newNode.next = temp;
    this.length++;
    return this;
  }
  remove(index) {
    //   example remove(2): 1 --> 10 --> X 99 X --> 5 --> 16 (remove 99)
    let leader = this.traverseToIndex(index - 1); //10
    let removeNode = leader.next; //99
    leader.next = removeNode.next; //10 --> 5 --> 16

    this.length--;
    return this;
  }

  reverse() {
    //reverse the linked list for example: [1, 10, 5, 16, 1000] -> [1000, 16, 5, 10, 1]
    if (!this.head.next) {
      //only one node
      return this.head;
    }
    let first = this.head; //1
    this.tail = this.head;
    let second = first.next; //10
    while (second) {
      const temp = second.next; //5
      second.next = first; //10 -> 1
      first = second; //head = 10
      second = temp; //head.next = 5
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(10000, 1000);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
