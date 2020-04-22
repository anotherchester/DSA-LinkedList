const _Node = require('./node')

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new _Node(data, this.head)
  }

  insertLast(data) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(data, null);
    }
  }

  insertBefore(data, insertBeforeData) {
    if (!this.head) {
      this.insertFirst(data);
    }
    else {
      let currentNode = this.head;
      if (!currentNode.next) {
        this.insertLast(data);
      }
      while (currentNode.next.value !== insertBeforeData) {
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(data, insertBeforeData)
    }
  }



}




