/**
 *  Before transforming an object into hash,
 *  need to remove unnecessary props such as thumbnail, price, weight, etc.
 */
import { ProductType } from '@entities/productCard';
import { ProductToHashType } from '@entities/cart';

export function mapProductToHash(product: ProductType): ProductToHashType {
  return {
    productId: product.id,
    selectedSizeId: product.selectedSizeId,
    selectedDoughId: product.selectedDoughId ? product.selectedDoughId : null,
    removedIngredientsId: product.ingredients
      .filter((ingr) => ingr.excluded)
      .map((ingr) => ingr.id),
    selectedToppingsId: product.toppings
      .filter((topping) => topping.selected)
      .map((topping) => topping.id),
  };
}
