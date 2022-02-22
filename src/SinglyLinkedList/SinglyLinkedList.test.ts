import { SinglyLinkedList } from "./SinglyLinkedList";

test("should create an empty singly linked list", () => {
  const sll = new SinglyLinkedList();

  expect(sll.length).toBe(0);
  expect(sll.head).toBe(null);
  expect(sll.tail).toBe(null);
});

test("should add a new item at the end with push", () => {
  const sll = new SinglyLinkedList();
  sll.push(15);

  expect(sll.head?.value).toBe(15);
  expect(sll.tail?.value).toBe(15);
  expect(sll.length).toBe(1);

  sll.push(16);
  expect(sll.head?.value).toBe(15);
  expect(sll.tail?.value).toBe(16);
  expect(sll.length).toBe(2);
});

test("should pop items from the end of the list", () => {
  const sll = new SinglyLinkedList();
  sll.push(15);
  sll.push(16);

  let node = sll.pop();
  expect(node?.value).toBe(16);
  expect(sll.length).toBe(1);
  expect(sll.tail?.value).toBe(15);
  expect(sll.head?.value).toBe(15);

  node = sll.pop();
  expect(node?.value).toBe(15);
  expect(sll.length).toBe(0);
  expect(sll.tail).toBe(null);
  expect(sll.head).toBe(null);
});

test("should remove items from the begining of the list with shift", () => {
  const sll = new SinglyLinkedList();
  sll.push(15);
  sll.push(16);

  let node = sll.shift();
  expect(node?.value).toBe(15);
  expect(sll.length).toBe(1);
  expect(sll.tail?.value).toBe(16);
  expect(sll.head?.value).toBe(16);

  node = sll.shift();
  expect(node?.value).toBe(16);
  expect(sll.length).toBe(0);
  expect(sll.tail).toBe(null);
  expect(sll.head).toBe(null);
});

test("should add items to the beginning of the list with unshift", () => {
  const sll = new SinglyLinkedList();
  sll.unshift(16);
  expect(sll.head?.value).toBe(16);
  expect(sll.length).toBe(1);

  sll.unshift(15);
  expect(sll.head?.value).toBe(15);
  expect(sll.tail?.value).toBe(16);
  expect(sll.length).toBe(2);
});

test("should return the correct node using the index with get", () => {
  const sll = new SinglyLinkedList();
  sll.push(15);
  sll.push(16);

  let value = sll.get(0)?.value;
  expect(value).toBe(15);

  value = sll.get(1)?.value;
  expect(value).toBe(16);

  value = sll.get(2);
  expect(value).toBeUndefined();
});

test("should change the value of a node using set", () => {
  const sll = new SinglyLinkedList();
  sll.push(15);
  sll.push(16);

  let value = sll.get(0)?.value;
  expect(value).toBe(15);

  sll.set(0, 14);

  value = sll.get(0)?.value;
  expect(value).toBe(14);

  sll.set(1, 15);
  value = sll.get(1)?.value;
  expect(value).toBe(15);
});
