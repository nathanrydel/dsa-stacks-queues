import { IndexError } from "../common/ll";

/** StackStr: can remove from the top or add to the top. */

class StackStr {
  private _lst: string[];

  constructor(initial: string[] = []) {
    this._lst = initial;
  }

  /** push(val): add val to top. Returns undefined. */
  push(val: string): void {
    this._lst.push(val);
  }

  /** pop(): remove and return item from top.
   * Throws error if empty. */
  pop(): string {
    if (this._lst.length === 0) throw new IndexError();
    return this._lst.pop()!;
  }

  /** peek(): return the value of first item. */
  peek(): string {
    if (this._lst.length === 0) throw new IndexError();
    return this._lst[this._lst.length - 1];
  }

  /** isEmpty(): return bool check if stack has length */
  isEmpty(): boolean {
    return this._lst.length === 0;
  }
}

export { StackStr };
