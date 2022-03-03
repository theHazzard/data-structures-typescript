import { DoublyLinkedList } from "./DoublyLinkedList";

test("should create an empty Double Linked List", () => {
  const dll = new DoublyLinkedList();
  expect(dll.head).toBeNull();
  expect(dll.tail).toBeNull();
  expect(dll.length).toBe(0);
});

test("should be able to push an item to the end using push", () => {
  const dll = new DoublyLinkedList();
  dll.push(15);
  expect(dll.head?.value).toBe(15);
  expect(dll.tail?.value).toBe(15);
  expect(dll.length).toBe(1);

  dll.push(16);
  expect(dll.head?.value).toBe(15);
  expect(dll.tail?.value).toBe(16);
  expect(dll.length).toBe(2);
  expect(dll.head?.next?.value).toBe(16);
  expect(dll.head?.prev).toBeNull();
  expect(dll.head?.next?.prev?.value).toBe(15);
  expect(dll.head?.next?.next).toBeNull();

  const returnedDll = dll.push(17);
  expect(dll.head?.value).toBe(15);
  expect(dll.tail?.value).toBe(17);
  expect(dll.length).toBe(3);
  expect(dll.head?.prev).toBeNull();
  expect(dll.head?.next?.value).toBe(16);
  expect(dll.head?.next?.prev?.value).toBe(15);
  expect(dll.head?.next?.next?.value).toBe(17);
  expect(dll.head?.next?.next?.prev?.value).toBe(16);
  expect(dll.head?.next?.next?.next).toBeNull();
  expect(returnedDll).toBe(dll);
});

test("should pop an item from the end of the list", () => {
  const dll = new DoublyLinkedList();

  dll.push(15);
  dll.push(16);
  dll.push(17);

  let listItem = dll.pop();
  expect(listItem?.value).toBe(17);
  expect(listItem?.prev).toBeNull();
  expect(listItem?.next).toBeNull();
  expect(dll.length).toBe(2);

  listItem = dll.pop();
  expect(listItem?.value).toBe(16);
  expect(listItem?.prev).toBeNull();
  expect(listItem?.next).toBeNull();
  expect(dll.length).toBe(1);

  listItem = dll.pop();
  expect(listItem?.value).toBe(15);
  expect(listItem?.prev).toBeNull();
  expect(listItem?.next).toBeNull();
  expect(dll.length).toBe(0);

  listItem = dll.pop();
  expect(listItem).toBeUndefined();
  expect(dll.length).toBe(0);
  expect(dll.head).toBeNull();
  expect(dll.tail).toBeNull();
});

test("should remove an item from the beginning using shift", () => {
  const dll = new DoublyLinkedList();
  dll.push(15);
  dll.push(16);
  dll.push(17);

  let removedValue = dll.shift();
  expect(removedValue?.value).toBe(15);
  expect(removedValue?.prev).toBeNull();
  expect(removedValue?.next).toBeNull();
  expect(dll.head?.value).toBe(16);
  expect(dll.tail?.value).toBe(17);
  expect(dll.length).toBe(2);

  removedValue = dll.shift();
  expect(removedValue?.value).toBe(16);
  expect(removedValue?.prev).toBeNull();
  expect(removedValue?.next).toBeNull();
  expect(dll.head?.value).toBe(17);
  expect(dll.tail?.value).toBe(17);
  expect(dll.length).toBe(1);

  removedValue = dll.shift();
  expect(removedValue?.value).toBe(17);
  expect(removedValue?.prev).toBeNull();
  expect(removedValue?.next).toBeNull();
  expect(dll.length).toBe(0);

  removedValue = dll.shift();
  expect(removedValue).toBeUndefined();

  expect(dll.length).toBe(0);
  expect(dll.head).toBeNull();
  expect(dll.tail).toBeNull();
});

test("should add a node at the beginning using unhsift", () => {
  let dll = new DoublyLinkedList();
  dll = dll.unshift(17);
  expect(dll.head?.value).toBe(17);
  expect(dll.tail?.value).toBe(17);
  expect(dll.length).toBe(1);

  dll = dll.unshift(16);
  expect(dll.head?.value).toBe(16);
  expect(dll.tail?.value).toBe(17);
  expect(dll.length).toBe(2);
  expect(dll.head?.next?.value).toBe(17);
  expect(dll.head?.prev).toBeNull();
  expect(dll.tail?.prev?.value).toBe(16);
  expect(dll.tail?.next).toBeNull();

  dll = dll.unshift(15);
  expect(dll.head?.value).toBe(15);
  expect(dll.tail?.value).toBe(17);
  expect(dll.length).toBe(3);
  expect(dll.head?.next?.value).toBe(16);
  expect(dll.head?.next?.next?.value).toBe(17);
  expect(dll.head?.prev).toBeNull();
  expect(dll.tail?.prev?.value).toBe(16);
  expect(dll.tail?.prev?.prev?.value).toBe(15);
  expect(dll.tail?.next).toBeNull();
});

test("should be able to obtain an element with an index using get", () => {
  const dll = new DoublyLinkedList();
  dll.push(15);
  dll.push(16);
  dll.push(17);

  let element = dll.get(1)!;
  expect(element.value).toBe(16);

  element = dll.get(2)!;
  expect(element.value).toBe(17);

  element = dll.get(0)!;
  expect(element.value).toBe(15);

  element = dll.get(5)!;
  expect(element).toBeUndefined();
});

test("should change the value of a node using set", () => {
  const dll = new DoublyLinkedList();
  dll.push(15);
  dll.push(16);
  dll.push(17);

  dll.set(0, 1);
  expect(dll.head?.value).toBe(1);

  dll.set(1, 2);
  expect(dll.head?.next?.value).toBe(2);

  dll.set(2, 3);
  expect(dll.head?.next?.next?.value).toBe(3);

  const noVal = dll.set(3, 4);
  expect(noVal).toBeUndefined();
});

test("should add a node on a position using insert", () => {
  const dll = new DoublyLinkedList();
  dll.push(15);
  dll.push(17);
  dll.push(19);

  dll.insert(0, 14);
  expect(dll.head?.value).toBe(14);
  expect(dll.head?.next?.value).toBe(15);

  dll.insert(2, 16);
  let elem = dll.get(2);
  expect(elem?.value).toBe(16);
  expect(elem?.prev?.value).toBe(15);
  expect(elem?.next?.value).toBe(17);

  dll.insert(4, 18);
  elem = dll.get(4);
  expect(elem?.value).toBe(18);
  expect(elem?.prev?.value).toBe(17);
  expect(elem?.next?.value).toBe(19);

  dll.insert(6, 20);
  elem = dll.get(6);
  expect(elem?.value).toBe(20);
  expect(elem?.prev?.value).toBe(19);
  expect(elem?.next).toBeNull();
  expect(dll.tail?.value).toBe(20);
});
