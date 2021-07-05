//example: null <-- 10 <-- --> 5 <-- --> 16 --> null

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    //example: 1 <-- --> 10 <-- --> 5 <-- --> 16
    const newNode = new Node(value);
    this.head.prev = newNode;
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
    //   example insert(2, 99): 1 <-- --> 10 ** <-- --> 99 <-- --> ** 5 <-- --> 16
    if (index === 0) {
      this.prepend(value);
      return this;
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1); //10

    let follower = leader.next; //5

    newNode.prev = leader;
    follower.prev = newNode;

    leader.next = newNode;
    newNode.next = follower;

    this.length++;
    return this;
  }
  remove(index) {
    //   example remove(2): 1 --> 10 <-- --> X 99 X <-- --> 5 --> 16 (remove 99)
    let leader = this.traverseToIndex(index - 1); //10
    let removeNode = leader.next; //99
    let follower = leader.next.next;
    leader.next = removeNode.next; //10 --> 5
    follower.prev = leader; //10 <-- 5

    this.length--;
    return this;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(2, 99);
myDoublyLinkedList.insert(10000, 1000);
myDoublyLinkedList.remove(2);
console.log(myDoublyLinkedList.printList());
