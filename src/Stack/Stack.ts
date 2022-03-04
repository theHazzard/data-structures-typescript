export class StackNode<T> {
  next: StackNode<T> | null = null;

  constructor(public value: T) {}
}

export class Stack<T> {
  private _first: StackNode<T> | null = null;
  private _last: StackNode<T> | null = null;
  private _length = 0;

  get first() {
    return this._first;
  }

  get last() {
    return this._last;
  }

  get length() {
    return this._length;
  }

  push(value: T): number {
    const node = new StackNode(value);

    if (!this._first) {
      this._first = node;
      this._last = node;
    } else {
      const currentFirst = this._first;
      this._first = node;
      node.next = currentFirst;
    }

    this._length++;
    return this._length;
  }
}
