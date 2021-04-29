import constants from "../utils/constants";
import computeProfitability from "../services/profitability";

test("Return Great profitability", () => {
  // Great Profitability
  expect(computeProfitability(100, 100.01)).toBe(constants.Profitability.GREAT);
  expect(computeProfitability(100, 200.01)).toBe(constants.Profitability.GREAT);
});

test("Return Good profitability", () => {
  expect(computeProfitability(100, 90)).toBe(constants.Profitability.GOOD);
  expect(computeProfitability(100, 100)).toBe(constants.Profitability.GOOD);
  expect(computeProfitability(100, 99.99)).toBe(constants.Profitability.GOOD);
});

test("Return Bad profitability", () => {
  expect(computeProfitability(100, 89.99)).toBe(constants.Profitability.BAD);
  expect(computeProfitability(100, 80)).toBe(constants.Profitability.BAD);
});
