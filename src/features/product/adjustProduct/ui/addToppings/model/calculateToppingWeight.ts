import type { ProductType } from '@entities/productCard';

export function calculateToppingWeight(
  product: ProductType,
  toppingWeight: Penny
): Gram {
  const weightModifier = product.sizeSpecs.find(
    (specObject) => specObject.id === product.selectedSizeId
  )!.extraToppingsWeightRate;
  return toppingWeight + (weightModifier / 100) * toppingWeight;
}
