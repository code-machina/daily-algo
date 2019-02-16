import Queue from '../Queue';

describe('Queue Test', () => {
  it('should return the most front entity', () => {
    const queue = new Queue();
    [...Array(2).keys()].slice(1).forEach(x => queue.enqueue(x));
    expect(queue.peek()).toBe(1);
  });
  it('should empty queue if there is not entity', () => {
    const queue = new Queue();
    [...Array(2).keys()].slice(1).forEach(x => queue.enqueue(x));
    const entity = queue.dequeue();
    expect(entity).toBe(1);
    expect(queue.isEmpty()).toBe(true);
  });
  it('should guarantee the integrity of entitities', () => {
    const queue = new Queue();
    [...Array(7).keys()].slice(1).forEach(x => queue.enqueue(x));
    const result = [];
    while (!queue.isEmpty()) {
      result.push(queue.dequeue());
    }
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
