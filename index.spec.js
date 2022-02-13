const { maxArea } = require("./index");

describe("Max Area", () => {
  describe("when has small number of heights", () => {
    it("should return maximum height", () => {
      const height = [1, 1];

      const result = maxArea(height);

      expect(result).toBe(1);
    });
  });
  describe("when has sample height", () => {
    it("should return maximum height", () => {
      const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

      const result = maxArea(height);

      expect(result).toBe(49);
    });
  });
});
