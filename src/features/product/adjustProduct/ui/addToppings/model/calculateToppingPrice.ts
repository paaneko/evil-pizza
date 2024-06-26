import type { ProductType } from '@entities/productCard';

export function calculateToppingPrice(
  product: ProductType,
  toppingPrice: Penny
): Penny {
  const priceModifier = product.sizeSpecs.find(
    (specObject) => specObject.id === product.selectedSizeId
  )!.extraToppingsPrice;
  return priceModifier + toppingPrice;
}
