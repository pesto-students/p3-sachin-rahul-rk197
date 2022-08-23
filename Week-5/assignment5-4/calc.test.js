const { sum, diff, product } = require("./calc");

test("Returns The Sum Of The Two Numbers", () => {
    expect(sum(5, -50)).toBe(5);
});

test("Returns The Sum Of The Two Numbers", () => {
    expect(diff(10, -5)).toBe(15);
});
test("Returns The Sum Of The Two Numbers", () => {
    expect(product(10, -5)).toBe(-50);
});