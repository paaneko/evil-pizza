import { DoughSpecType, ProductType } from '@entities/product/model/types';

export function calculatePrice(product: ProductType) {
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
    product.oldPrice +
    currentSize.extraPrice +
    doughPrice +
    toppingsGeneralPrice
  );
}
