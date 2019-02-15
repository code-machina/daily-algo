import DLinkNode from '../DLinkNode';

describe('Doubly Link Node', () => {
  it('should have a value if value is provided', () => {
    const node = new DLinkNode(1, null, null);
    expect(node.value).toBe(1);
  });
  it('should have a prev node if prev parameter is provided', () => {
    const node1 = new DLinkNode(1, null, null);
    const node2 = new DLinkNode(2, null, node1);
    expect(node2.prev.value).toBe(1);
    expect(node2.value).toBe(2);
  });
  it('should access to prev node', () => {
    const node1 = new DLinkNode(1, null, null);
    const node2 = new DLinkNode(2, null, node1);
    expect(node2.prev).toEqual(node1);
    // expect(node2.prev.value).toBe(1);
    // expect(node2.value).toBe(2);
  });
});
