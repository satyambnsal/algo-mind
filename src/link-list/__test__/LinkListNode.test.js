import LinkListNode from '../LinkListNode';

describe('LinkListNode', () => {
  test('should create list node with value', () => {
    const node = new LinkListNode('satyam');
    expect(node.value).toBe('satyam');
    expect(node.next).toBeNull();
  });
});
