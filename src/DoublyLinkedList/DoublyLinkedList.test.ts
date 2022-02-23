import { DoublyLinkedList } from "./DoublyLinkedList";

test("should create an empty Double Linked List", () => {
  const dll = new DoublyLinkedList();
  expect(dll.head).toBeNull();
  expect(dll.tail).toBeNull();
  expect(dll.length).toBe(0);
});
