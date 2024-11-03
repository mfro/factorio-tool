export function assert(condition: boolean, message: string): asserts condition {
  if (!condition) {
    debugger; // eslint-disable-line
    throw new Error(message);
  }
}
