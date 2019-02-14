import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LinkedList();
  });
  it('should return create empty linked list', () => {
    expect(linkedList.toString()).toBe('');
  });
  it('should return a node if it has the only one node', () => {
    const v = 1;
    linkedList.append(v);
    expect(linkedList.toString()).toBe('1');
    expect(linkedList.toArray().length).toBe(1);
  });
  it('should prepend a node before head', () => {
    const v = 1;
    const v2 = 2;
    linkedList.append(v);
    linkedList.prepend(v2);
    expect(linkedList.head.value).toBe(v2);
    expect(linkedList.tail.value).toBe(v);
    expect(linkedList.toArray().length).toBe(2);
  });
  it('should delete a head node', () => {
    // const values = [1, 2, 3, 4, 5, 6];
    const values = [...Array(7).keys()].slice(1);
    values.forEach(x => linkedList.append(x));
    const deletedNode = linkedList.delete(1);
    expect(linkedList.values()).not.toContain(1);
    expect(deletedNode.value).toBe(1);
  });
  it('should delete a node which are at the next of head node', () => {
    const values = [...Array(7).keys()].slice(1);
    values.forEach(x => linkedList.append(x));
    const deletedNode = linkedList.delete(2);
    expect(deletedNode.value).toBe(2);
    expect(linkedList.values()).not.toContain(2);
  });
  it('should delete a node which are at the front of tail node', () => {
    const values = [...Array(7).keys()].slice(1);
    values.forEach(x => linkedList.append(x));
    const deletedNode = linkedList.delete(5);
    expect(deletedNode.value).toBe(5);
    expect(linkedList.values()).not.toContain(5);
  });
  it('should delete a tail node', () => {
    // const values = [1, 2, 3, 4, 5, 6];
    const values = [...Array(7).keys()].slice(1);
    values.forEach(x => linkedList.append(x));
    const deletedNode = linkedList.delete(6);
    expect(linkedList.values()).not.toContain(6);
    expect(deletedNode.value).toBe(6);
  });
  it('should delete only one node if there are several nodes that has same value', () => {
    const values = [...Array(7).keys()].slice(1);
    values.push(2);
    values.forEach(x => linkedList.append(x));
    const deletedNode = linkedList.delete(2);
    expect(deletedNode.value).toBe(2);
    expect(linkedList.values()).toContain(2);
  });
  it('should return a specific node if input is matched with Node\'s value', () => {
    const values = [...Array(7).keys()].slice(1);
    values.push(2);
    values.forEach(x => linkedList.append(x));
    const node = linkedList.search(5);
    expect(node.value).toBe(5);
  });
  it('should return reverse ordered linkedlist', () => {
    const values = [...Array(7).keys()].slice(1);
    values.forEach(x => linkedList.append(x));
    const list = linkedList.reverse();
    // toEqual 문은 배열의 순서 일치 여부도 확인한다.
    expect(list.values()).toEqual([6, 5, 4, 3, 2, 1]);
    // expect(list.values()).toEqual([...Array(7).keys()].slice(1));
  });
  it('should return head node if head node exist', () => {
    const values = [...Array(7).keys()].slice(1);
    linkedList.fromArray(values);
    const deletedNode = linkedList.deleteHead();

    expect(linkedList.toArray().length).toBe(5);
    expect(linkedList.values()).not.toContain(1);
    expect(deletedNode.value).toBe(1);
  });
  it('should return ordered data', () => {
    
  });
});
