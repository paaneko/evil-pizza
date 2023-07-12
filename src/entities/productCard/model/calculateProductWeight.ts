import type { DoughSpecType, ProductType } from './types';

export function calculateProductWeight(product: ProductType) {
  const currentSize = product.sizeSpecs.find(
    (sizeSpecObject) => sizeSpecObject.id === product.selectedSizeId
  )!;

  // Some products may not have a doughSpecs value, so we must exclude this option
  const doughWeight =
    product.doughSpecs.length !== 0
      ? (product.doughSpecs as DoughSpecType[]).find(
          (doughSpecObject) => doughSpecObject.id === product.selectedDoughId
        )!.extraWeight
      : 0;

  // Gets the total weight of all selected toppings, taking into account the current size modifier
  const toppingsGeneralWeight = product.toppings
    .filter((topping) => topping.selected)
    .reduce((acc, { extraWeight }) => {
      return (
        acc +
        extraWeight +
        (currentSize.extraToppingsWeightRate / 100) * extraWeight
      );
    }, 0);
  return (
    product.weight +
    currentSize.extraWeight +
    doughWeight +
    toppingsGeneralWeight
  );
}
