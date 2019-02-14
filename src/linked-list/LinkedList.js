import LinkNode from './LinkNode';
import Comparator from '../Comparator';

export default class LinkedList {
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    const v = new LinkNode(value);
    if (!this.head) {
      this.head = v;
      this.tail = v;
    } else {
      this.tail.next = v;
      this.tail = v;
    }

    return this;
  }

  /**
   * @param {*} value
   * @return {LinkList}
   */
  prepend(value) {
    const v = new LinkNode(value, this.head);
    if (!this.head) {
      this.append(value);
    } else {
      this.head = v;
    }
    return this;
  }

  /**
   * @param {*} value
   */
  search(value) {
    if (!this.head) return null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        break;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  toString(callback) {
    return this.toArray().map(n => n.toString(callback)).toString();
  }

  reverse() {
    /**
     * reverse 는 다른 소스를 참고하였다.
     * 테이블을 그려가며 알고리즘을 설계하는 연습을 해본다.
     */
    let currNode = this.head;
    let prevNode = null;
    // eslint-disable-next-line no-unused-vars
    let nextNode = null;

    while (currNode !== null) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    // while (nextNode !== this.tail) {
    //   prevNode = currNode;
    //   currNode = currNode.next;
    //   nextNode = currNode.next;
    //   console.log(currNode.value);
    //   currNode.next = prevNode;
    // }
    // swap this.head and this.tail
    // const tmp = this.head;
    // this.head = this.tail;
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }

  /**
   * @return {LinkNode[]}
   */
  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  fromArray(values) {
    values.forEach(value => this.append(value));
    return this;
  }

  deleteHead() {
    if (!this.head) return null;

    const deletedNode = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedNode;
  }

  /**
   * it will delete a node, which has a same value with parameter.
   * @param {*} value
   * @return {LinkNode}
   */
  delete(value) {
    if (!this.head) {
      return null;
    }
    let deleteNode = this.head;

    while (deleteNode !== null) {
      if (this.head === deleteNode && this.compare.equal(value, deleteNode.value)) {
        this.head = this.head.next;
        break;
      } else if (this.compare.equal(value, deleteNode.next.value)) {
        const tmp = deleteNode.next;
        if (deleteNode.next === this.tail) {
          deleteNode.next = null;
        } else {
          deleteNode.next = deleteNode.next.next;
        }
        deleteNode = tmp;
        break;
      }
      // go to next node
      deleteNode = deleteNode.next;
    }

    return deleteNode;
  }

  values() {
    const valArray = [];
    this.toArray().forEach(x => valArray.push(x.value));
    return valArray;
  }
}
