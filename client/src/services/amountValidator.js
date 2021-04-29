// Some products can only be sold in predefined multiples and the amount should be bigger than 0
export default function amountValidator(product, amount) {
  if (product.multiple == null && amount > 0) return true;
  else if (amount === 0) return false;
  else {
    return amount % product.multiple == 0;
  }
}
