export function foo(fn: (...args: any[]) => any) {
  return fn(...[1, 2, 3]);
}
