import { add, subtract } from "./maths";
describe("maths tests", () => {
  it("should add numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
describe("simple tests", () => {
  it("should add numbers", () => {
    expect(true).toBe(true);
  });

  it("should subtract numbers", () => {
    expect(subtract(10, 2)).toEqual(8);
    expect(subtract(20, 2)).toEqual(18);
    expect(subtract(20, 2)).toEqual(18);
  });
});
