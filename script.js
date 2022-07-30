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
    if (this.length === 0) this.head = newNode;
    else this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  unshift(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
}

let myLinkedList = new LInkedList(4);

console.log(myLinkedList);
