import constants from "../utils/constants";

/* 
    The Profitability is GREAT if the new price is bigger than the original
    The Profitability is GOOD if the new price is up to 10% lower than the original
    The Profitability is BAD if the new price is less than the original price - 10%

    Reminder: don't use float type to represent price - prone to rounding problems
*/
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
