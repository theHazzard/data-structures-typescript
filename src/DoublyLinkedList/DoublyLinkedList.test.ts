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

  dll.push(17);
  expect(dll.head?.value).toBe(15);
  expect(dll.tail?.value).toBe(17);
  expect(dll.length).toBe(3);
  expect(dll.head?.prev).toBeNull();
  expect(dll.head?.next?.value).toBe(16);
  expect(dll.head?.next?.prev?.value).toBe(15);
  expect(dll.head?.next?.next?.value).toBe(17);
  expect(dll.head?.next?.next?.prev?.value).toBe(16);
  expect(dll.head?.next?.next?.next).toBeNull();
});
