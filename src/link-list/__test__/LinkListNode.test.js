import LinkListNode from '../LinkListNode';

describe('LinkListNode', () => {
  test('should create list node with value', () => {
    const node = new LinkListNode('satyam');
    expect(node.value).toBe('satyam');
    expect(node.next).toBeNull();
  });

  test('should link node together', () => {
    const node1 = new LinkListNode('satyam');
    const node2 = new LinkListNode('shivam', node1);

    expect(node1.next).toBeNull();
    expect(node1.value).toBe('satyam');
    expect(node2.next).toBeDefined();
    expect(node2.next.value).toBe('satyam');
  });

  test('should convert node to string', () => {
    const node = new LinkListNode(22);

    expect(node.toString()).toBe('22');
  });

  test('should convert node to string with custom stringifier', () => {
    const node = new LinkListNode({ key: 'name', value: 'satyam' });
    const dataFormatter = (data) => `key: ${data.key}, value: ${data.value}`;

    expect(node.toString(dataFormatter)).toBe('key: name, value: satyam');
  });
});
