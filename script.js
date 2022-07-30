class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LInkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}

let myLinkedList = new LInkedList(4);

console.log(myLinkedList);
