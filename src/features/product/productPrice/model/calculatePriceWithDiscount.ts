import { DoughSpecType, ProductType } from '@entities/product/model/types';

/**
 * In the future, the logic of calculating the price of a discount product may change
 */

export function calculatePriceWithDiscount(product: ProductType) {
  const currentSize = product.sizeSpecs.find(
    (sizeSpecObject) => sizeSpecObject.id === product.selectedSizeId
  )!;

  // Some products may not have a doughSpecs value, so we must exclude this option
  const doughPrice =
    product.doughSpecs.length !== 0
      ? (product.doughSpecs as DoughSpecType[]).find(
          (doughSpecObject) => doughSpecObject.id === product.selectedDoughId
        )!.extraPrice
      : 0;

  // Gets the total price of all selected toppings, taking into account the current size modifier
  const toppingsGeneralPrice = product.toppings
    .filter((topping) => topping.selected)
    .reduce((acc, { extraPrice }) => {
      return acc + extraPrice + currentSize.extraToppingsPrice;
    }, 0);
  return (
    product.newPrice +
    currentSize.extraPrice +
    doughPrice +
    toppingsGeneralPrice
  );
}
