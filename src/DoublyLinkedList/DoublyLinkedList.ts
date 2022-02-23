class ListNode<T> {
  next: ListNode<T> | null = null;
  prev: ListNode<T> | null = null;

  constructor(public value: T) {}
}

export class DoublyLinkedList<T> {
  _head: ListNode<T> | null = null;
  _tail: ListNode<T> | null = null;
  _length: number = 0;

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }

  push(value: T) {
    const newNode = new ListNode(value);
    if (this._length === 0) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      const oldTail = this._tail!;
      oldTail.next = newNode;
      newNode.prev = this._tail;
      this._tail = newNode;
    }

    this._length++;
  }
}
