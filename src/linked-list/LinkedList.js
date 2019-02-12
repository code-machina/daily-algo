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

  prepend(value) {
    const v = new LinkNode(value, this.head);
    if (!this.head) {
      this.append(value);
    } else {
      this.head = v;
    }

    return this;
  }

  toString(callback) {
    return this.toArray().map(n => n.toString(callback)).toString();
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
