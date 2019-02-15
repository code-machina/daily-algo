import DLinkedList from '../DLinkedList';

describe('Doubly Linked List', () => {
  let dlinkedList;
  const exec = (length) => {
    const values = [...Array(length + 1).keys()].slice(1);
    dlinkedList = new DLinkedList();
    values.forEach(x => dlinkedList.append(x));
  };
  it('should append new node if append method is called with a value', () => {
    exec(6);
    expect(dlinkedList.toArray().length).toBe(6);
    expect(dlinkedList.toArray()[0]).toBe(1);
    expect(dlinkedList.toArray()[1]).toBe(2);
  });
  it('should delete a node which are matched with value', () => {
    // 값이 일치하는 노드를 삭제하고 그 길이가 차감되어야 한다.
    exec(6);
    const node = dlinkedList.delete(1);
    expect(node.value).toBe(1);
    expect(dlinkedList.toArray().length).toBe(5);
  });
  it('has a tail node which are right before original tail node when you delete the one.', () => {
    // tail 에 위치할 노드를 삭제하고 tail 이 그 앞에 위치하는지 확인한다.
    exec(6);
    const node = dlinkedList.delete(6);
    expect(node.value).toBe(6);
    expect(dlinkedList.tail.value).toBe(5);
    expect(dlinkedList.toArray().length).toBe(5);
  });
  it('should return length 0 if last node is deleted.', () => {
    // 마지막 노드가 삭제될 경우, 리스트의 길이가 0이다.
    exec(1);
    const node = dlinkedList.delete(1);
    expect(node.value).toBe(1);
    expect(dlinkedList.tail).toBe(null);
    expect(dlinkedList.head).toBe(null);
    expect(dlinkedList.toArray().length).toBe(0);
  });
  it('should work well when one of list is deleted', () => {
    // 중간 노드를 삭제할 경우 순서를 유지하고 그 노드만 삭제된다.
    exec(5);
    const node = dlinkedList.delete(2);
    expect(node.value).toBe(2);
    expect(dlinkedList.toArray()).toEqual([1, 3, 4, 5]);
  });
  it('should prepend new node in front of empty list', () => {
    // 비어 있는 리스트에 prepend 메서드를 이용하여 노드를 추가한다.
    exec(0);
    expect(dlinkedList.toArray().length).toBe(0);
    dlinkedList.prepend(100);
    const { head, tail } = dlinkedList;
    expect(dlinkedList.head).toBe(dlinkedList.tail);
    expect(head.value).toBe(100);
    expect(tail.value).toBe(100);
    expect(dlinkedList.toArray().length).toBe(1);
  });
  it('should prepend new node, and list\'s head node must be it', () => {
    // 중간 노드를 삭제할 경우 순서를 유지하고 그 노드만 삭제된다.
    exec(5);
    dlinkedList.prepend(0);
    const { head } = dlinkedList;
    expect(head.value).toBe(0);
    expect(dlinkedList.toArray()).toEqual([0, 1, 2, 3, 4, 5]);
  });
  it('should switch head and tail', () => {
    exec(5);
    dlinkedList.swapHeadAndTail();
    expect(dlinkedList.head.value).toBe(5);
    const beforeLast = dlinkedList.tail.prev;
    const afterFirst = dlinkedList.head.next;
    expect(dlinkedList.tail.value).toBe(1);
    expect(beforeLast.value).toBe(4);
    expect(afterFirst.value).toBe(2);
  });
  it('should reverse the order of list if we call reverse() method', () => {
    exec(5);
    expect(dlinkedList.toArray()).toEqual([1, 2, 3, 4, 5]);
    dlinkedList.reverse();
    expect(dlinkedList.toArray()).toEqual([1, 2, 3, 4, 5].reverse());
  });
  it('should find the node if value is exactly same as a nodes value', () => {
    exec(5);
    expect(dlinkedList.toArray()).toEqual([1, 2, 3, 4, 5]);
    const node = dlinkedList.find({ value: 3 });
    expect(node.value).toBe(3);
  });
  it('should find the node that callback accpets', () => {
    exec(5);
    expect(dlinkedList.toArray()).toEqual([1, 2, 3, 4, 5]);
    const node = dlinkedList.find({
      callback: (x) => {
        if (x === 3) return true;
        return false;
      },
    });
    expect(node.value).toBe(3);
  });
});
