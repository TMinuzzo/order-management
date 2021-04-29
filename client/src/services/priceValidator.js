// Expects a price with a format XX.XX
export default function priceValidator(price) {
  let regex = /^\d+(?:\.\d{0,2})$/;
  if (regex.test(price)) return true;
  else return false;
}
