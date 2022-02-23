export class ListNode<T> {
  next: ListNode<T> | null = null;

  constructor(public value: T) {}
}

export class SinglyLinkedList<T> {
  private _length = 0;
  private _head: ListNode<T> | null = null;
  private _tail: ListNode<T> | null = null;

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
    const node = new ListNode(value);

    if (!this._head) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail!.next = node;
      this._tail = node;
    }

    this._length++;
    return this;
  }

  pop(): ListNode<T> | undefined {
    if (!this._head) {
      return undefined;
    }

    if (this._length === 1) {
      const oldHead = this._head;
      this._head = null;
      this._tail = null;
      this._length--;
      return oldHead;
    }

    let current = this._head;
    let newTail = this._head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this._tail = newTail;
    this._tail.next = null;
    this._length--;
    return current;
  }

  shift(): ListNode<T> | undefined {
    if (!this._head) {
      return undefined;
    }
    const oldHead = this._head;
    this._head = oldHead.next;
    this._length--;

    if (!this._head) {
      this._tail = null;
    }
    return oldHead;
  }

  unshift(value: T): this {
    const newNode = new ListNode(value);

    if (!this._head) {
      this._tail = newNode;
    } else {
      newNode.next = this._head;
    }

    this._head = newNode;
    this._length++;

    return this;
  }

  get(index: number): ListNode<T> | undefined {
    if (!this._head || index > this._length - 1 || index < 0) {
      return undefined;
    }

    let elem = this._head;
    while (index !== 0) {
      elem = elem.next!;
      index--;
    }

    return elem;
  }

  set(index: number, value: T): ListNode<T> | undefined {
    if (!this._head || index > this._length - 1 || index < 0) {
      return undefined;
    }

    let elem = this.get(index)!;
    if (elem) {
      elem.value = value;
    }

    return elem;
  }

  insert(index: number, value: T): this | undefined {
    if (index > this._length || index < 0) {
      return undefined;
    }

    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this._length) {
      return this.push(value);
    }

    const elem = this.get(index - 1);

    const newElem = new ListNode(value);
    newElem.next = elem!.next;
    elem!.next = newElem;
    this._length++;
    return this;
  }

  remove(index: number): ListNode<T> | undefined {
    if (!this._head || index > this._length - 1 || index < 0) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this._length - 1) {
      return this.pop();
    }

    const prevElem = this.get(index - 1)!;
    const elem = prevElem.next!;
    prevElem.next = elem.next || null;
    this._length--;
    return elem;
  }
}
