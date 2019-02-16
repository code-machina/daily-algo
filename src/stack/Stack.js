import LinkedList from '../linked-list/LinkedList';

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * Follow the LIFO
   */
  peek() {
    if (this.isEmpty()) return null;
    return this.linkedList.head.value;
  }

  push(value) {
    this.linkedList.prepend(value);
  }

  pop() {
    const deleted = this.linkedList.deleteHead();
    return deleted ? deleted.value : null;
  }

  toArray() {
    return this.linkedList.toArray();
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
