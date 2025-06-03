import { add } from "./math";
describe("math", () => {
  describe("add", () => {
    it("2+2 should equal 4", () => {
      expect(add(2, 2)).toBe(4);
    });
    it("adding negative values should equal a negative value", () => {
      expect(add(-2, -4)).toBe(-6);
    })
  });
});
