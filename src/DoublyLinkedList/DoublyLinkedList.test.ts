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
