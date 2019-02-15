import DLinkNode from '../DLinkNode';

describe('logic test', () => {
  it('should swap each other', () => {
    const mid = new DLinkNode(2, null, null);
    let head = new DLinkNode(1, mid, null);
    let tail = new DLinkNode(3, null, mid);
    mid.prev = tail;
    mid.next = head;
    // swap head and tail
    const swap = head;
    head = tail;
    tail = swap;
    // swap prev pointer
    let swapPrev = head.prev;
    head.prev = tail.prev;
    head.prev = swapPrev;
    // swap next pointer
    const swapNext = head.next;
    head.next = tail.next;
    tail.next = swapNext;

    // swap mid's prev and next
    swapPrev = mid.prev;
    mid.prev = mid.head;
    mid.head = mid.prev;
    const result = [];
    let currentNode = head;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    expect(result).toEqual([3, 2, 1]);
  });
});
