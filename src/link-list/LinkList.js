import LinkListNode from './LinkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const node = new LinkListNode(value, this.head);
    this.head = node;
  }

  append(value) {
    const node = new LinkListNode(value);
    if (!this.head) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = node;
    }
  }

  delete(value) {
    let temp = this.head;
    let tempPrev = null;
    while (temp && temp.value !== value) {
      tempPrev = temp;
      temp = temp.next;
    }
    if (temp) {
      tempPrev.next = temp.next;
      temp.next = null;
    }
  }

  traverse() {
    let temp = this.head;
    while (temp) {
      temp = temp.next;
    }
  }

  contains(value) {
    let temp = this.head;
    while (temp) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  length() {
    let temp = this.head;
    let count = 0;

    while (temp) {
      count += 1;
      temp = temp.next;
    }
    return count;
  }
}
