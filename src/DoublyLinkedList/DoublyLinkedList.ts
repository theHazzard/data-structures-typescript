class ListNode<T> {
  next: ListNode<T> | null = null;
  prev: ListNode<T> | null = null;

  constructor(public value: T) {}
}

export class DoublyLinkedList<T> {
  private _head: ListNode<T> | null = null;
  private _tail: ListNode<T> | null = null;
  private _length: number = 0;

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }

  push(value: T): this {
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
    return this;
  }

  pop(): ListNode<T> | undefined {
    if (!this._tail) {
      return undefined;
    }

    const removedValue = this._tail;
    const previousValue = removedValue.prev;
    if (previousValue) {
      previousValue.next = null;
      removedValue.prev = null;
      this._tail = previousValue;
    } else {
      this._head = null;
      this._tail = null;
    }
    this._length--;

    return removedValue;
  }

  shift(): ListNode<T> | undefined {
    if (!this._head) {
      return undefined;
    }

    const removedNode = this._head;
    const nextValue = removedNode.next;
    if (nextValue) {
      nextValue.prev = null;
      removedNode.next = null;
      this._head = nextValue;
    } else {
      this._head = null;
      this._tail = null;
    }

    this._length--;
    return removedNode;
  }

  unshift(value: T): this {
    const newNode = new ListNode(value);
    if (this._head) {
      newNode.next = this._head;
      this._head.prev = newNode;
      this._head = newNode;
    } else {
      this._head = newNode;
      this._tail = newNode;
    }

    this._length++;
    return this;
  }

  get(index: number): ListNode<T> | undefined {
    if (!this._head || !this._tail || index < 0 || index >= this._length) {
      return undefined;
    }

    if (index >= Math.round(this._length / 2)) {
      let returnValue = this._tail;
      for (let x = this._length - 1; x > index; x--) {
        returnValue = returnValue.prev!;
      }
      return returnValue;
    } else {
      let returnValue = this._head;
      for (let x = 0; x < index; x++) {
        returnValue = returnValue.next!;
      }
      return returnValue;
    }
  }

  set(index: number, value: T): ListNode<T> | undefined {
    let node = this.get(index);
    if (node) {
      node.value = value;
    }

    return node;
  }

  insert(index: number, value: T): this | undefined {
    if (index < 0 || index > this._length) {
      return undefined;
    }

    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this._length) {
      return this.push(value);
    }

    const newNode = new ListNode(value);
    const nextNode = this.get(index)!;
    const prevNode = nextNode.prev!;

    newNode.next = nextNode;
    newNode.prev = prevNode;

    prevNode.next = newNode;
    nextNode.prev = newNode;
    this._length++;

    return this;
  }
}
