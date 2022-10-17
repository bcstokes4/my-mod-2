class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const newNode = new DoublyLinkedListNode(val);
    this.length++;

    // Case 1: There are not any nodes in the list
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    // Case 2: There are nodes in the list
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  addToTail(val) {
    // Your code here
    const newNode = new DoublyLinkedListNode(val);
    this.length++;

    if (!this.tail) {
      this.tail = newNode;
      this.head = newNode;
      return this;
    }

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
