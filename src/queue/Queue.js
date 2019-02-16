import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * Queue 가장 앞에 있는 데이터를 반환, 단 삭제하지 않는다.
   * @return {*}
   */
  peek() {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  }

  /**
   * 리스트의 맨 뒤에 데이터를 넣는다.
   * @param {*} value
   */
  enqueue(value) {
    this.linkedList.append(value);
  }

  /**
   * 맨 앞에 위차한 엔티티를 삭제하고 반환한다.
   * @return {*}
   */
  dequeue() {
    const deleted = this.linkedList.deleteHead();
    return deleted ? deleted.value : null;
  }

  /**
   * Queue 의 엔티티들을 문자열로 변환하여 출력한다.
   * @param {*} callback
   * @return {string}
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
