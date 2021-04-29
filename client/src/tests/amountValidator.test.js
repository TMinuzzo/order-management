import amountValidator from "../services/amountValidator";

const superStarDestroyer = {
  multiple: null,
  name: "Super​ ​Star​ ​Destroyer",
  price: "4570000.00",
};

const tieFighter = {
  multiple: 2,
  name: "TIE​ ​Fighter",
  price: "75000.00",
};

describe("amountValidator", () => {
  test("Returns true for valid amounts", () => {
    expect(amountValidator(superStarDestroyer, 12)).toBe(true);
    expect(amountValidator(superStarDestroyer, 1)).toBe(true);
    expect(amountValidator(tieFighter, 2)).toBe(true);
    expect(amountValidator(tieFighter, 6)).toBe(true);
  });

  test("Return false for invalid amounts", () => {
    expect(amountValidator(superStarDestroyer, 0)).toBe(false);
    expect(amountValidator(tieFighter, 1)).toBe(false);
    expect(amountValidator(tieFighter, 3)).toBe(false);
  });
});
