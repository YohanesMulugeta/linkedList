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

    // -------------------------------------- checking if the head and the tail are pointing to null
    if (!this.head) this.head = newNode;
    else this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this; // this is the intire linkied list
  }

  unshift(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this; // this is the entire underlined linkedlist
  }

  pop() {
    if (!this.head) return null;

    this.length--;

    if (!this.head.next) {
      this.head = null;
      this.tail = this.head;

      return null;
    }

    let curNode = this.head;

    while (true) {
      if (!curNode.next.next) {
        this.tail = curNode;
        this.tail.next = null;
        break;
      }

      curNode = curNode.next;
    }

    return this;
  }
}

let myLinkedList = new LInkedList(4);

myLinkedList.push(5);
myLinkedList.push(7);
myLinkedList.unshift(3);

myLinkedList.pop();

console.log(myLinkedList);
