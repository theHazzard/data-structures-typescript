import { Stack } from "./Stack";

test("should create a Stack", () => {
  const stack = new Stack();

  expect(stack.length).toBe(0);
  expect(stack.first).toBeNull();
  expect(stack.last).toBeNull();
});

test("should be able to add a new value using push", () => {
  const stack = new Stack();

  stack.push(3);
  expect(stack.first?.value).toBe(3);
  expect(stack.last?.value).toBe(3);
  expect(stack.length).toBe(1);

  stack.push(2);
  expect(stack.first?.value).toBe(2);
  expect(stack.last?.value).toBe(3);
  expect(stack.length).toBe(2);

  stack.push(1);
  expect(stack.first?.value).toBe(1);
  expect(stack.first?.next?.value).toBe(2);
  expect(stack.last?.value).toBe(3);
  expect(stack.length).toBe(3);
});
