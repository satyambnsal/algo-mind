import LinkList from './link-list/LinkList';

const list = new LinkList();
list.prepend('Satyam');
list.prepend('Shivam');
list.prepend(2);
list.append('Rahul');
list.delete('Shivam');
list.traverse();
