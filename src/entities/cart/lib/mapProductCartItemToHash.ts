import { ProductCartItemType } from '../../productCartItem';
import { ProductCartItemToHashType } from '../model/types';

/**
 *  Before transforming an object into hash,
 *  need to remove unnecessary props such as thumbnail, price, weight, etc.
 */

export function mapProductCartItemToHash(
  productCartItem: ProductCartItemType
): ProductCartItemToHashType {
  return {
    productId: productCartItem.productId,
    selectedSizeId: productCartItem.selectedSize
      ? productCartItem.selectedSize.id
      : null,
    selectedDoughId: productCartItem.selectedDough
      ? productCartItem.selectedDough.id
      : null,
    removedIngredientsId: productCartItem.removedIngredients.map(
      (ingr) => ingr.id
    ),
    selectedToppingsId: productCartItem.selectedToppings.map(
      (topping) => topping.id
    ),
  };
}
