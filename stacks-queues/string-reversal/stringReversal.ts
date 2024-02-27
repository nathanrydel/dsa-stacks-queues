import { StackStr } from "../common/stack";

/** Return reverse of string. */

function stringReversal(str: string): string {
  const stack = new StackStr([...str]);
  let reversedString = "";

  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}

export { stringReversal };