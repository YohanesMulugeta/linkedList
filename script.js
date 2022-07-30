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

  // -------------------------------------------------------------------------------------------- ADDING node to the END of linked list
  push(value) {
    const newNode = new Node(value);

    // --------------- checking if the head and the tail are pointing to null
    if (!this.head) this.head = newNode;
    else this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this; // this is the intire linkied list
  }

  //   ----------------------------------------------------------------------------------------- ADDING node to the start of the linked list
  unshift(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    // ----------------- checking if the linked list was empity
    if (!this.head.next) this.tail = this.head;

    return this; // this is the entire underlined linkedlist
  }

  //   -------------------------------------------------------------------------------------------- DELETING node from the start of the linked list

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;

    if (this.length === 1) {
      this.tail = null;
    }

    this.length--;
    temp = null; // this will remove the pointer to the now head to allow js to make cleanup

    return this;
  }

  // ------------------------------------------------------------------------------------------- DELETING node to the END of the linked list
  pop() {
    // ----------------- for empity linked list
    if (!this.head) return undefined;

    this.length--;

    // ---------------- for linked list with only one node
    if (!this.head.next) {
      this.head = null;
      this.tail = this.head;
    }

    // --------------- for linked list with > 1 node
    let pre = this.head; // previous node
    let temp = this.head;

    while (temp) {
      temp = pre.next;
      //   ------------- if this node is the final
      if (!temp.next) {
        this.tail = pre;
        this.tail.next = null;
        break;
      }

      pre = pre.next;
    }

    return this;
  }

  //   ---------------------------------------------------------------------------- GETTING item from the linked list
  get(index) {
    // ---------------- guard key for queries beyond the boundaries
    if (index >= this.length || index < 0) return undefined;

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }
}

let myLinkedList = new LInkedList(4);

// myLinkedList.push(5);
// myLinkedList.push(7);
// myLinkedList.pop();

// myLinkedList.unshift(3);
// myLinkedList.shift();
// myLinkedList.shift();
// myLinkedList.pop();

console.log(myLinkedList.get(1));
// console.log(myLinkedList);
