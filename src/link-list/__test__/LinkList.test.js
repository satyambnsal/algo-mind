import LinkList from '../LinkList';

describe('LinkList', () => {
  let list = null;
  beforeEach(() => {
    list = new LinkList();
  });
  test('should prepend value', () => {
    list.prepend('Satyam');
    list.prepend('Shivam');

    expect(list.length()).toBe(2);
    expect(list.head).not.toBeNull();
    expect(list.head.value).toBe('Shivam');
  });

  test('should append value', () => {
    list.append('Satyam');
    list.append('Shivam');
    list.append('Rahul');
    expect(list.length()).toBe(3);
    expect(list.head).not.toBeNull();
    expect(list.head.value).toBe('Satyam');
  });

  test('should delete value', () => {
    list.append('Satyam');
    list.append('Shivam');
    list.delete('Shivam');
    expect(list.length()).toBe(1);
    expect(list.contains('Shivam')).toBeFalsy();
  });

  test('should traverse values', () => {
    list.append('Satyam');
    list.append('Shivam');
    list.traverse();
    expect(list.length()).toBe(2);
  });
  test('should contain value', () => {
    list.append('Satyam');
    list.append('Shivam');
    list.append('Rahul');
    expect(list.contains('Rahul')).toBeTruthy();
  });
});
