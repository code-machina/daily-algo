import DLinkNode from './DLinkNode';
import Comparator from '../Comparator';

export default class DLinkedList {
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * @param {*} value 
   * @return {DLinkNode}
   */
  append(value) {
    // head 가 null 인 경우
    if (!this.head) {
      this.head = new DLinkNode(value, null, null);
      this.tail = this.head;
      return this.head;
    } else {
      
    }
  }
};