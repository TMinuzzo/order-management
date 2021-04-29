import constants from "../utils/constants";

// Reminder: don't use float type to represent price - prone to rounding problems
export default function computeProfitability(originalPrice, newPrice) {
  let delta = Math.abs(newPrice - originalPrice);
  let percent = originalPrice * 0.1;
  let profitability = null;

  if (newPrice > originalPrice) {
    profitability = constants.Profitability.GREAT;
  } else if (percent >= delta) {
    profitability = constants.Profitability.GOOD;
  } else if (newPrice <= originalPrice - percent) {
    profitability = constants.Profitability.BAD;
  }

  return profitability;
}
