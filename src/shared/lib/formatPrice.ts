export function formatPrice(price: Penny) {
  return `£${Number(price / 100)}`;
}
