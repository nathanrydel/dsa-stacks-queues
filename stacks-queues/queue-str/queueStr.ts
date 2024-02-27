import { IndexError, LLStr } from "../common/ll";

/** QueueStr: can remove from start or add to end */

class QueueStr {
  private _ll: LLStr;

  constructor(initial: string[] = []) {
    this._ll = new LLStr(initial);
  }

  /** enqueue(val): add val to end. Returns undefined. */
  enqueue(val: string): void {
    return this._ll.push(val);
  }

  /** dequeue(): remove & return item from start.
   * Throws error if empty. */
  dequeue(): string {
    if (this._ll.length === 0) throw new IndexError();
    return this._ll.shift();
  }

  /** peek(): return the value of top. */
  peek(): string {
    return this._ll.head!.val;
  }

  /** peek(): return the value of top. */
  isEmpty(): boolean {
    return this._ll.length === 0;
  }
}


export { QueueStr };
