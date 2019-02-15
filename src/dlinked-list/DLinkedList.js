import DLinkNode from './DLinkNode';
import Comparator from '../Comparator';

/**
 * 아름다운 코드를 마음을 안정 시킨다.
 */

export default class DLinkedList {
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  swapHeadAndTail() {
    if (!this.head) return this;
    if (this.head === this.tail) return this;
    // head 와 tail 의 위치를 바꾼다.
    const nextNode = this.head.next;
    const prevNode = this.tail.prev;

    // head 와 tail 의 next, prev 를 각각 바꾼다.
    this.tail.next = this.head.next;
    this.head.next = null;
    this.head.prev = this.tail.prev;
    this.tail.prev = null;
    const swap = this.tail;
    this.tail = this.head;
    this.head = swap;

    nextNode.prev = this.head;
    prevNode.next = this.tail;
    return this;
  }

  find({ value = undefined, callback = undefined }) {
    if (!this.head) return null;
    let currentNode = this.head;
    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      if (value && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * @return {DLinkedList}
   */
  reverse() {
    // 순서를 뒤바꾼다.
    // head 가 null 이거나 head == tail 인 경우 연산하지 않는다.
    if (!this.head || this.head === this.tail) return this;

    // this.swapHeadAndTail();

    let currentNode = this.tail;
    while (currentNode) {
      const prevNode = currentNode.prev;
      const nextNode = currentNode.next;
      currentNode.prev = nextNode;
      currentNode.next = prevNode;
      currentNode = prevNode;
    }
    const swap = this.head;
    this.head = this.tail;
    this.tail = swap;
    return this;
  }

  /**
   * 리스트의 앞에 노드가 생성된다.
   * @param {*} value
   * @return {DLinkNode}
   */
  prepend(value) {
    const node = new DLinkNode(value);
    // 리스트의 길이가 0 인 경우 head 에 노드를 할당
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      return this;
    }
    // 그 외의 경우
    this.head.prev = node;
    node.next = this.head;
    node.prev = null;
    this.head = node;
    return this;
  }

  /**
   * @param {*} value
   * @return {DLinkNode}
   */
  append(value) {
    const node = new DLinkNode(value, null, null);
    // head 가 null 인 경우
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    return this;
  }

  delete(value) {
    // 만약 this.head 가 null 이라면 리스트에 데이터가 없는 경우
    if (!this.head) return null;
    let currentNode = this.head;
    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        // 삭제할 노드가 head 인 경우
        if (this.head && currentNode === this.head) {
          if (currentNode.next) {
            // 다음 노드가 존재하는 경우
            this.head = currentNode.next;
            this.head.prev = null;
            return currentNode;
          }
          // 다음 노드가 존재하지 않는 경우
          // if (this.head === this.tail ) {
          // 노드가 1개 인 경우이다.
          this.head = null;
          this.tail = null;
          return currentNode;
          // }
        }
        // 노드가 2개 이상이고 tail 을 삭제할 경우
        if (this.tail && this.tail === currentNode) {
          const prevNode = this.tail.prev;
          this.tail = prevNode;
          this.tail.next = null;
          return currentNode;
        }

        // 삭제할 노드가 중간에 위치하는 경우 즉, 노드가 3개 이상인 경우
        if (this.tail !== currentNode && this.head !== currentNode) {
          const prevNode = currentNode.prev;
          const nextNode = currentNode.next;
          prevNode.next = currentNode.next;
          nextNode.prev = prevNode;
          return currentNode;
        }
      }
      // 다음 노드로 순환 한다.
      currentNode = currentNode.next;
    }
    // 찾아낸 값이 없는 경우 null 을 리턴한다.
    return null;
  }

  toArray() {
    const result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }
}
