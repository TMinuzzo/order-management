import priceValidator from "../services/priceValidator";

describe("priceValidator", () => {
  test("Return true to valid prices", () => {
    expect(priceValidator("100.0")).toBe(true);
    expect(priceValidator("100.52")).toBe(true);
  });

  test("Return false to invalid prices", () => {
    expect(priceValidator("100")).toBe(false);
    expect(priceValidator("100.588")).toBe(false);
  });
});
