const test = require("node:test");
const assert = require("node:assert/strict");
const Calculator = require("../src/calculator");

const calculator = new Calculator();

test("add returns the sum of two positive numbers", () => {
  assert.equal(calculator.add(4, 6), 10);
});

test("add supports negative numbers", () => {
  assert.equal(calculator.add(-4, -6), -10);
});

test("add supports decimal numbers", () => {
  assert.equal(calculator.add(2.5, 1.5), 4);
});

test("subtract returns the difference of two positive numbers", () => {
  assert.equal(calculator.subtract(10, 4), 6);
});

test("subtract supports negative results", () => {
  assert.equal(calculator.subtract(4, 9), -5);
});

test("subtract supports decimal numbers", () => {
  assert.equal(calculator.subtract(5.5, 2.5), 3);
});

test("multiply returns the product of two positive numbers", () => {
  assert.equal(calculator.multiply(4, 5), 20);
});

test("multiply supports negative numbers", () => {
  assert.equal(calculator.multiply(-4, 5), -20);
});

test("multiply supports decimal numbers", () => {
  assert.equal(calculator.multiply(2.5, 4), 10);
});

test("divide returns the quotient of two positive numbers", () => {
  assert.equal(calculator.divide(20, 5), 4);
});

test("divide supports negative numbers", () => {
  assert.equal(calculator.divide(-20, 5), -4);
});

test("divide supports decimal results", () => {
  assert.equal(calculator.divide(5, 2), 2.5);
});

test("divide throws a RangeError when dividing by zero", () => {
  assert.throws(() => calculator.divide(10, 0), RangeError);
});
