class ListNode<T> {
  next: ListNode<T> | null = null;
  prev: ListNode<T> | null = null;

  constructor(public value: T) {}
}

export class DoublyLinkedList<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;
  length: number = 0;
}
