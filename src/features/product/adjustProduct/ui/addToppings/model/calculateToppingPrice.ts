import { ProductType } from '@entities/product';

export function calculateToppingPrice(
  product: ProductType,
  toppingPrice: Penny
): Penny {
  const priceModifier = product.sizeSpecs.find(
    (specObject) => specObject.id === product.selectedSizeId
  )!.extraToppingsPrice;
  return priceModifier + toppingPrice;
}
